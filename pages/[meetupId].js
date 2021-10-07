import { ObjectId } from "mongodb";
import { Fragment } from "react";
import { connectToDatabase } from "../lib/mongodb";
import Head from 'next/head'
import MeetupDetail from "../components/meetups/MeetupDetail";

// Error: getStaticPaths is required for dynamic SSG pages and is missing for '/[meetupId]'.
export async function getStaticPaths() {
    const {db} = await connectToDatabase()
    
    const meetups = await db.collection('meetups').find({}).toArray()

    return {
        fallback: 'blocking',
        paths: meetups.map((meetup) => ({
            params: {meetupId: meetup._id.toString()}
        }))
    }
}


export async function getStaticProps(context){
    const meetupId = context.params.meetupId

    const {db} = await connectToDatabase()

    const meetup = await db.collection('meetups').findOne({_id: ObjectId(meetupId)})
    console.log(meetup)
    return {
        props: {
            meetupData: {
                id: meetup._id.toString(),
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description
            }
        }
    }
} 


export default function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetupDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description} />
        </Fragment>
    )
}
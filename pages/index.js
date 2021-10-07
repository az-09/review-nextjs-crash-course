import Head from 'next/head'
import { Fragment } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import { connectToDatabase } from '../lib/mongodb'


export async function getStaticProps() {
  const {db} = await connectToDatabase()

  const meetups = await db.collection('meetups').find({}).toArray()

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1 //seconds 1 second regenerate
  }
}

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>NextJs Meeup</title>
        <meta name="description" content="Browse meetups generated in NextJs"/>

      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}


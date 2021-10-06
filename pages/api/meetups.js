import {connectToDatabase} from '../../util/mongodb'

export default async (req, res) => {
    const {db} = await connectToDatabase()

    const meetups = await db.collection('meetups').find({}).limit(20).toArray()

    res.status(200).json({
        meetups: meetups.map(meetup => ({
            title: meetup.title,
            address: meetup.address,
            image: meetup.image,
            id: meetup._id.toString()
        }))
        
    })
}
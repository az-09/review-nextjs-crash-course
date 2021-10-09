import {connectToDatabase} from '../../lib/mongodb'

export default async (req, res) => {
    const {db} = await connectToDatabase()

    const meetups = await db.collection('meetups')

    if(req.method == 'POST'){
        const data = req.body
        console.log(data)
        const result = await meetups.insertOne(data)
        console.log("test")
        res.status(201).json({message: 'Meeup inserted'})

    }
}
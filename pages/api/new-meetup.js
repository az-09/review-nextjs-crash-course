import {connectToDatabase} from '../../lib/mongodb'

export default async (req, res) => {
    const {db} = await connectToDatabase()

    const meetups = await db.collection('meetups')

    if(req.method === 'POST'){
        const data = req.body
        
        const result = await meetups.insertOne(data)

        res.status(201).join({message: 'Meeup inserted'})

    }
}
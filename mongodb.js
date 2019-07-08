//These codes require npm initialization
//With mongodb npm module required in Package.json file as dependency

const {MongoClient , ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

//Object ID

// const id = new ObjectID();
// console.log(id)


//Connect to the local server

MongoClient.connect(connectionURL , { useNewUrlParser : true } , (error , client) => {

    if(error) {
        return console.log('Could not connect to the local server')
    }

    const db = client.db(databaseName)



//InsertOne

    // db.collection('task').insertOne({ name:'suraj' , age:22 }, (error , result) => {
    //     if(error) {
    //         return console.log('document not inserted.')
    //     }

    //     console.log(result.ops)
    // })


//InsertMany

    // db.collection('task').insertMany([
    //     {
    //         task:'math homework',
    //         completed:true
    //     },
    //     {
    //         task:'physics homework',
    //         completed:false
    //     },
    //     {
    //         task:'chemistry homework',
    //         completed:false
    //     }
    // ] , (error , result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })



//FindOne

    // db.collection('users').findOne({ _id: new ObjectID("5d21b86192a77d2fc84aa4e1") } , (error , result) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(result)
    // })


//Find

    // db.collection('users').find({ age:21 }).toArray((error , documents) => {
    //     if(error) {
    //         return console.log('Unable to find')
    //     }

    //     console.log(documents)

    // })

    // db.collection('users').find({ age:21 }).count((error , count) => {
    //     if(error) {
    //         return console.log('Unable to find')
    //     }

    //     console.log(count)

    // })



//UpdateOne

    //  db.collection('users').updateOne({ _id:new ObjectID("5d21b8a092a77d2fc84aa4e3") } , { 
    //     $set : {
    //         name : "every sexy girl"
    //     }
    //  }).then((result) => {
    //     console.log(result)
    //  }).catch((error) => {
    //     console.log(error)
    //  })


//DeleteMany

    // db.collection('users').deleteMany({ age:21 }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


//InsertOne( using promises )

    db.collection('task').insertOne({ task:'hair cutting' , completed:false }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})
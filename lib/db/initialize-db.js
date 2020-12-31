var connectDB = require('./connect-db')

async function initializeDB(){
    let {db,client} = await connectDB();
    let collection = db.collection("users")
    await collection.insert({username:'vicky',password:'vicky'});
    console.info(db)
    client.close()
  
}
initializeDB()
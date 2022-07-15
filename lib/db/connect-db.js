var  MongoClient  = require("mongodb").MongoClient;
const url = ``
let db = null;
module.exports =  async function connectDB(){
   
    try{
    let client = await MongoClient.connect(url,{useNewUrlParser: true})
    db = client.db();
    
    return {db,client};
    }
    catch(e){
        console.error(e)
        return null;
    }
    
} 

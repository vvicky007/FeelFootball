var  MongoClient  = require("mongodb").MongoClient;
const url = `mongodb+srv://vineeth:123mongo@cluster0.kwlut.mongodb.net/feelfootball?retryWrites=true&w=majority`
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

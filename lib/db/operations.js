var connectDB = require('./connect-db')
var md5 = require('md5')
async function adduser(username,pass)
{
   
    try{
        let {db} = await connectDB();

        let collection = db.collection('users') 
        const password  = md5(pass) 
        const results = await collection.insertOne({username,password})
       
        return results;
    }
    catch (e){
        console.log(e)
        
        return null
    }
        
}
async function finduser(username,pass){
  
    try{
        
        let {db} = await connectDB();
        let collection = db.collection('users') 
        const password  = md5(pass) 
        let user = await collection.findOne({username});
        if(!user){
            
            return "user not found";
        }
        let hash = md5(pass)
        let isPasswordCorrect = hash === user.password
        if(!isPasswordCorrect){
            
            return "Password is incorrect"
        }
        return user.username
    }
    catch(e){
        console.log(e)
        return null;
    }
}
module.exports = {adduser,finduser}
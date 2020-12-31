const express = require('express');
const {adduser,finduser} = require('../db/operations')
const authRouter = express.Router();
function router(){

    authRouter.route('/signup').post(async (req,res)=>{
        const {username,password} = req.body
        const userinfo = await finduser(username,password)
     
        if(userinfo != "user not found")
        {
            res.json({
                message:"user already exists"
            })
        }
        const results = await adduser(username,password)
        if (results.ops[0].username == username && results != null)
        {
           req.login(req.body,()=>{
           
            res.json({
                username,
                message:"success"
            })
        })
        }
        else{
            res.json({
                message:"error"
            })
        }
 
    })
    authRouter.route('/login').post(async (req,res)=>{
        const {username,password} = req.body
        const userinfo = await finduser(username,password)

        if(userinfo == "user not found")
        {
            res.json({
                message:"No such user kindly Signup"
            })
        }
        if (userinfo == "Password is incorrect"){
            res.json({
                message:"Password is incorrect"
            })
        }
        if(userinfo == username && userinfo!=null){
            res.json({
                username,
                message:"Authentication is Successfull"
            })
        }
        else{
            res.json({
                message:"error"
            })
        }

    })
    return authRouter
}
module.exports = router
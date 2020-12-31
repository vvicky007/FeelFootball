const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');

const {adduser,finduser} = require('../db/operations')
module.exports = function localStrategy(){
    passport.use(new Strategy({
        usernameField: 'username',
        passwordField: 'password'
    },async (username,password,done)=>{
        const user = {username,password}
        const userinfo = await finduser(username,password)
        
        if(userinfo== username){
            done(null,username)
        }
        else{
            done(null,false)
        }

    }))
}
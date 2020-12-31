const passport = require('passport');
require('./strategies/local.strategy')();
function passportConfig(app){
    app.use(passport.initialize());
    app.use(passport.session());
    //pushing the user in session
    passport.serializeUser((user,done)=>{ 
        done(null,user)
    })
    //Retrieving the user from session
    passport.deserializeUser((user,done)=>{
        done(null,user)
    })
    
}
module.exports = passportConfig;
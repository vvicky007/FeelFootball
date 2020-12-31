import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";
import * as useractions from '../redux/actions/useractions'
import { Redirect } from "react-router";
Signup.propTypes = {
    
};
async function submit(user,pass,seterr,props){
  
    const obj = 
    {
        username:user, 
        password:pass
    }
    const res = await fetch('/auth/signup',{
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(obj)    
    })
    const data = await res.json() 
   
    if(data.message=="error"){
        seterr("An Error Occured. Please Try again after sometime")
    }
    if(data.message =="user already exists"){
        seterr(data.message+ " Please login")
    }
    if(data.username==user){
        seterr("Signed in Successfully")
        props.dispatch(useractions.signin(user))
    }

}
async function login(user,pass,seterr,props){
 
    const obj = 
    {
        username:user, 
        password:pass
    }
    const res = await fetch('/auth/login',{
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(obj)    
    })
    const data = await res.json() 
  
    if(data.message=="error"){
        seterr("An Error Occured. Please Try again after sometime")
    }
    if(data.message =="Password is incorrect"){
        seterr(data.message+ ". Try again")
    }
    if(data.username==user){
        seterr("Logged in Successfully")
        props.dispatch(useractions.signin(user))
    }

}
function Signup(props) {
 
    const [user,setuser] = useState("");
    const [pass,setpass] = useState("");
    const [err,seterr] = useState("");
    const [red,setred] = useState(false)
    useEffect(()=>{
        if(err=="Logged in Successfully"){
            setred(true)
        }
        if(err=="Signed in Successfully"){
           setred(true)
        }
    },[err])

    return (
        <div className = "background">
        <Header/>
        <div className = "container">
        {red?<Redirect to="/profile" />:""}
        <form onSubmit = {
            (e)=>
            {
                e.preventDefault();

                props.act == "Sign up"?submit(user,pass,seterr,props):login(user,pass,seterr,props)
            }
            }>
            <div className="form-group col-lg-5 col-m-5 col-sm-3">
                <label htmlFor = "user">Email Id:</label>
                <input type = "email" className = "form-control" name = "username" 
                       id="username" placeholder="User Id" value = {user} onChange = {(e)=>setuser(e.target.value)}/>
            </div>
            <div className="form-group col-lg-5 col-m-4 col-sm-3">
                <label htmlFor = "passWord">Password</label>
                <input type = "passWord" className = "form-control" name = "password"
                       id="passWord" placeholder="password" value = {pass} onChange = {(e)=>setpass(e.target.value)}/>
            </div>
            <small id="emailHelp" className="form-text text-muted ml-3">{err!=""?err:""}</small>

            <button type="submit" className="btn btn-primary ml-3 mt-2">{props.act}</button>
        </form>
        </div>
        </div>
    );
}
function mapStateToProps(state){
    return {
        username:state.user.username
    }
}
export default connect(mapStateToProps)(Signup);  
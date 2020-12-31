import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import * as useractions from '../redux/actions/useractions'
import Header from './common/Header'
import { Redirect } from "react-router";
Profile.propTypes = {
    
};

function Profile(props) {
    const [red,setred] = useState(false)
    useEffect(()=>{
        if(props.username==""){
            setred(true)
        }
    },[props.username])
    return (
        <div className = "background">
            {red?<Redirect to="/"/>:""}
            <Header/>
            <div className = "container">
                <h1>Hi {props.username}</h1>
            </div>
            <div className = "container">
                <h2>Sorry for the inconvinience...This page is under Progress...!</h2>
            </div>
        </div>
    );
}
function mapStateToProps(state){
   
    return {
        username:state.user.username
    }
}
export default connect(mapStateToProps)(Profile);
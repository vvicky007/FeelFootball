import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown'
import { connect } from "react-redux";
Header.propTypes = {
    
};
const styles = {
    brand:{
        fontSize:40,
        fontWeight:'400'
    },
    navItems:{
        marginRight:50,
        padding:30
    }
}
function Header(props) {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" expand = "md">
            <Navbar.Brand className = "ml-5" href="#home" style={styles.brand}>Feel Football</Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-6 justify-content-end" style ={styles.navItems}>
            <NavLink to = "/" className = "nav-link">Home</NavLink>
            {/* <NavDropdown title="UEFA" id="basic-nav-dropdown">
                <NavDropdown.Item ><NavLink to ="/leagues/ChampionsLeague" >Champions League</NavLink> </NavDropdown.Item>
                <NavDropdown.Item ><NavLink to ="/leagues/LaLiga" >LaLiga</NavLink></NavDropdown.Item>
                <NavDropdown.Item ><NavLink to ="/leagues/Ligue1" >Ligue 1</NavLink></NavDropdown.Item>
                <NavDropdown.Item ><NavLink to ="/leagues/SerieA" >Serie A</NavLink></NavDropdown.Item>
                <NavDropdown.Item ><NavLink to ="/leagues/Bundesliga" >Bundesliga</NavLink></NavDropdown.Item>
            </NavDropdown> */}
            <NavDropdown title="Leagues" id="basic-nav-dropdown">
                <NavDropdown.Item ><NavLink to ="/leagues/PremierLeague" >Premiere League</NavLink> </NavDropdown.Item>
                <NavDropdown.Item ><NavLink to ="/leagues/LaLiga" >LaLiga</NavLink></NavDropdown.Item>
                <NavDropdown.Item ><NavLink to ="/leagues/Ligue1" >Ligue 1</NavLink></NavDropdown.Item>
                <NavDropdown.Item ><NavLink to ="/leagues/SerieA" >Serie A</NavLink></NavDropdown.Item>
                <NavDropdown.Item ><NavLink to ="/leagues/Bundesliga" >Bundesliga</NavLink></NavDropdown.Item>
            </NavDropdown>

            
                <NavLink to={props.username==""?"/signup":"/profile"} className = "nav-link">
                {props.username==""?"Sign Up":props.username.split('@')[0]}
                </NavLink>
            
            
           
            <NavLink to={props.username==""?"/login":"/profile"} className = "nav-link">{props.username==""?"Log In":""}</NavLink>
            
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
function mapStateToProps(state){
    return {
        username:state.user.username
    }
}
export default connect(mapStateToProps)(Header);

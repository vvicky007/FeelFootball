import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import Header from '../components/common/Header'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Standings from '../components/leagues/Stadnings'
import Stats from '../components/leagues/Stats'
import { connect } from "react-redux";
import LiveMatches from '../components/leagues/LiveMatches'
Leagues.propTypes = {
    
};
const styles = {
    logo:{
        marginBottom:35
    },
    image:{
        height:150,
        borderWidth:5
    }
}
function Leagues(props) {
    const [key, setKey] = useState('Standings');
    const {leaguename} = props.match.params
    const {leagues} = props
    return (
       <div className = 'background' >
       <Header/>
       <div className="container">
       <div className = "row container" style={styles.logo}>
       <img src= {leagues[leaguename].imgUrl} 
            alt="Premier League Logo"
            className = "rounded-circle img-fluid"
            style = {styles.image}    
            />
        <h1 className = "col-sm mt-5">{leaguename}</h1>
        </div>
       <div className = "container">
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            defaultActiveKey="Standings"
            >
            <Tab eventKey="Standings" title="Standings">
                <Standings leaguename = {leaguename} />
            </Tab>
            <Tab eventKey="Stats" title="Stats">
                <Stats leaguename = {leaguename}/>
            </Tab>
            <Tab eventKey="Matches" title="Matches" >
                <LiveMatches leaguename = {leaguename} />
            </Tab>
        </Tabs>
        </div>
        </div>
       </div>
    );
}
function mapStateToProps(state){
    return {
        leagues:state.league.leagues
    }
}
export default connect(mapStateToProps)(Leagues);

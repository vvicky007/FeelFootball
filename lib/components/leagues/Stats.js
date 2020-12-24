import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from 'components/common/Header'
import { connect } from "react-redux";
import leagueactions from '../../redux/actions/leagueactions'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
Stats.propTypes = {
    
};
const styles = {
    table:{
       
        marginTop:0,
        color:'#000'
    },
    logo:{
        height:25,
        marginRight:10
    },
    dropdown:{
        marginLeft:'auto',
        color:"#4f837f" ,
        width:60
    },
    dropdownDiv:{
        marginLeft:'auto', 
        marginBottom:20
    }
};
function Stats(props) {
    const [top_scorers,setScorers] = useState();
    const [type,settype] = useState("Goals");
    const {leagues,leaguename} = props;
  
    useEffect(()=>{
        async function getStats(url){
            try{
            const resp = await fetch(url,{
                dataType: 'json',
                type: 'GET'
            })
            const data = await resp.json()
            if(type=="Goals"){
            setScorers(data.stats[0].leaders)
            }
            else{
                setScorers(data.stats[1].leaders) 
            }
        }
        catch(e){
            alert("An Error Occured...Sorry for the Inconvinience "+e)
        }
        }
       
        getStats(`http://site.api.espn.com/apis/site/v2/sports/soccer/${leagues[leaguename].id}/statistics`)
       
    },[type,leaguename])
    return (
        <div className = 'background'>
        <Header/>
        <div style={styles.dropdownDiv} className="container">
        <h2>Top Scorers</h2>
        <Dropdown className = "md-5 container" style = {styles.dropdown}>
            <Dropdown.Toggle  id="dropdown-basic">
                Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
            {["Goals","Assists"].map((num)=> <Dropdown.Item onClick = {()=>settype(num)}>{num} </Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
        </div>
        
        <table className="table mt-0 container" style = {styles.table}>
                    <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>Games Played</th>
                        <th>Goals Scored</th>
                        <th>Assists</th>
                        <th>Player Card</th>
                    </tr>
                    </thead>
                <tbody>
                { top_scorers ? top_scorers.map((scorer) => {
                    return (
                    <tr key={scorer.athlete.id}>
                        <td>
                            {scorer.athlete.displayName}
                            
                        </td>
                        <td>
                            {scorer.athlete.team.name}
                        </td>
                        <td>
                            {scorer.athlete.statistics[0].value}
                        </td>
                        <td>
                            {scorer.athlete.statistics[1].value}
                        </td>
                        <td>
                            {scorer.athlete.statistics[2].value}
                        </td>
                        <td>
                        <Button variant="primary" href = {scorer.athlete.links[0].href}>{scorer.athlete.displayName} Card</Button>
                        </td>
                        
                    </tr>
                    );
                }):<div>Loading...</div>}
                </tbody>
            </table>
        </div>
    );
}
function mapStateToProps(state){
    return {
        leagues:state.league.leagues
    }
}
export default connect(mapStateToProps)(Stats);
import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from 'components/common/Header'
import { connect } from "react-redux";

Stadnings.propTypes = {
    
};
const styles = {
    table:{
       
        marginTop:0,
        color:'#000'
    },
    logo:{
        height:25,
        marginRight:10
    }
};
function Stadnings(props) {
    const [standings,setStandings] = useState();
    const {leagues,leaguename} = props;
   
    useEffect(()=>{
        async function getStandings(url){
            try{
            const resp = await fetch(url,{
                dataType: 'json',
                type: 'GET'
            })
            const data = await resp.json()
            setStandings(data.children[0].standings.entries)
        }
        catch(e){
            alert("An Error Occured...Sorry for the Inconvinience "+e)
        }
        }
        getStandings(`http://site.api.espn.com/apis/v2/sports/soccer/${leagues[leaguename].id}/standings`)
       
    },[leaguename])
    return (
        
            <div className = 'background'>
            <Header/>

            <table className="table mt-0 container" style = {styles.table}>
                    <thead>
                    <tr>
                        <th>Team</th>
                        <th>MP</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Draw</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>GD</th>
                        <th>Pts</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                <tbody>
                { standings ? standings.map((stand) => {
                    return (
                    <tr key={stand.team.id}>
                        <td>
                            <img src = {stand.team.logos[0].href} alt="logo" style = {styles.logo} />
                            {stand.team.name}
                            
                        </td>
                        <td>
                            {stand.stats[3].value}
                        </td>
                        <td>
                            {stand.stats[0].value}
                        </td>
                        <td>
                            {stand.stats[1].value}
                        </td>
                        <td>
                            {stand.stats[2].value}
                        </td>
                        <td>
                            {stand.stats[4].value}
                        </td>
                        <td>
                            {stand.stats[5].value}
                        </td>
                        <td>
                            {stand.stats[9].value}
                        </td>
                        <td>
                            {stand.stats[6].value}
                        </td>
                        <td>
                            {stand.stats[12].displayValue}
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
export default connect(mapStateToProps)(Stadnings);
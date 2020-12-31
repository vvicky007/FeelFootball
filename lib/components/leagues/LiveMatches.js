import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/common/Header'
import Card from '../common/Card'
import { connect } from "react-redux";
import { useToasts } from 'react-toast-notifications'
LiveMatches.propTypes = {
    
};


function LiveMatches(props) {
    const [matches,setMatches] = useState();
    const {leagues,leaguename} = props;
    useEffect(()=>{
        
        async function getMatches(url){
            try{
            const resp = await fetch(url,{
                dataType: 'json',
                type: 'GET'
            })
            const data = await resp.json()
            setMatches(data.events)
        }
        catch(e){
         
            alert("An Error Occured...While getting live matches "+e)
        }
        }
        getMatches(`http://site.api.espn.com/apis/site/v2/sports/soccer/${leagues[leaguename].id}/scoreboard`)
       
    },[leaguename])
    return (
        <div className = 'background column'>
        <Header/>
        <div className = "mt-2">
        <h3>Matches</h3>
        <div className = "row">
        {matches?
        matches.length!=0?
        matches.map((match)=>{
            return(
                <Card match = {match}/>)
        }):<h4 className="ml-4">No Live Matches</h4>:
        <div>Loading.....</div>}
        </div>
        </div>
        
       
   
       
        </div>
    );
}
function mapStateToProps(state){
  
    return {
        leagues:state.league
    }
}
export default connect(mapStateToProps)(LiveMatches);

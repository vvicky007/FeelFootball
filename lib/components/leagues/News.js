import React,{useEffect,useState,useReducer} from 'react';
import PropTypes from 'prop-types';
import NewsCard from '../common/NewsCard'
News.propTypes = {
    
};

function News(props) {
    const [articles,setarticles] = useState([])
    useEffect(()=>{
        async function getNews(url){
            
            const resp = await fetch(url)
            const data = await resp.json()
            setarticles(prevState=> [...prevState,...data.articles])
        }
        getNews(`https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news`)
        getNews(`https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/news`)
        getNews(`https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/news`)
        getNews(`https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/news`)
        getNews(`https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/news`)
        
    },[])
    return (
        <div className ="column container row">
           {articles.length>0?
           articles.map((article)=>{

               return (<NewsCard article = {article}/>);
           })
           :<div>Loading...</div>}
        </div>
    );
}

export default News;

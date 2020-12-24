import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

ArticleList.propTypes = {
    
};

function ArticleList(props) {
    return (
        <div>
           {Object.values(props.articles).map((article)=>(
           
               <Article key={article.id} article={article} action={props.articleActions}/>
           ))}
        </div>
    );
}

export default ArticleList;
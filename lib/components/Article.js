import React from 'react';
import PropTypes from 'prop-types';

Article.propTypes = {
    
};

function Article(props) {
    const {article,action}=props
    const author = action. lookup(article.authorId)
    return (
        <div>
        <div>{article.title}</div>
        <div>{article.date}</div>
        <div>
            <a href={author.website}>
                {author.firstName} {author.lastName}
            </a>
        </div>            
        <div>
            {article.body}
        </div>
        </div>
    );
}

export default Article;
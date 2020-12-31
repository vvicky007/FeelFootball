import React from 'react';
import PropTypes from 'prop-types';

NewsCard.propTypes = {
    
};

function NewsCard({article}) {
    
    return (
        <div className="col-md-6 col-lg-4 col-sm-12 mt-3">
            <div className="card">
                <div className="card-body row">
                    <img className ="col-12 img-fluid" src={article.images&&article.images.length>0?article.images[0].url:""}/>
                    <div className = "column mt-3 container">
                    <h5 className="card-title" style = {{fontSize:25}}>{article.headline}</h5>
                    <p className="card-text">{article.description}</p>
                    <a href={article.links?article.links.web.href:""} className="btn btn-primary">Know More</a> 
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default NewsCard;

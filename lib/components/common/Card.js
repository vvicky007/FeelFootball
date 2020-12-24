import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

Card.propTypes = {
    
};

function Card({match}) {
    console.log(match.competitions[0])
    const status = match.status.type.name
    return (
        <div className="col-sm-6 mt-3">
            <div className="card text-center">
            <div className = "card-header">
                <p>{match.name}</p>
                <p>{status=="STATUS_FULL_TIME"||status=="STATUS_LIVE"?"Full Time":match.competitions[0].venue.fullName}</p>
            </div>
                <div className="card-body">
                    <div className = "row m-2">
                    <div className = "col-5">
                       <div>
                       <img  src={match.competitions[0].competitors[0].team.logo} style = {{height:50}}/>
                       <p className = "card-text mt-2">{status=="STATUS_FULL_TIME"||status=="STATUS_LIVE"?match.competitions[0].competitors[0].score:""}</p>
                       </div>
                        <p className = "card-text">{match.competitions[0].competitors[0].team.name}</p>
                        <p className = "card-text">Last Five Games: {match.competitions[0].competitors[0].form}</p>
                    </div>
                    <div className = "col-2 mt-2">
                        VS
                    </div>
                    <div className = "col-5">
                        <div>
                        <img src={match.competitions[0].competitors[1].team.logo} style = {{height:50}} />
                        <p className = "card-text mt-2">{status=="STATUS_FULL_TIME"?match.competitions[0].competitors[1].score:""}</p>
                        </div>
                        <p className = "card-text">{match.competitions[0].competitors[1].team.name}</p>
                        <p className = "card-text">Last Five Games: {match.competitions[0].competitors[1].form}</p>
                    </div>

                    </div>
                    
                    
                    {
                        status == "STATUS_SCHEDULED"?
                        <p className = "card-text m-2">Scheduled on {match.status.type.detail}</p>
                        :<p className = "card-text"></p>
                    }

                  
                </div>
                <a href={status == "STATUS_SCHEDULED"?match.links[0].href:status == "STATUS_FULL_TIME"?match.links[1].href:match.links[0].href} className = "btn btn-primary">
                {status == "STATUS_SCHEDULED"?"Summary":status == "STATUS_FULL_TIME"?"Highlights and Stats":"Match is live"}
                </a>
            </div>
        </div>
    );
}

export default Card;
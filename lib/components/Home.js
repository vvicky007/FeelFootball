import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/common/Header'
import About from 'components/common/About'
import News from 'components/leagues/News'
Home.propTypes = {
    
};

function Home(props) {
    return (
        <div className = 'background'>
          <Header/>
          <div className="container">
          <h2>News</h2>
          <News />
          </div>
          <About />
          {/* <button className= 'btn btn-primary btn-lg'>Login</button> */}
        </div>
    );
}

export default Home;
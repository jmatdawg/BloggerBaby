import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

function HelloWorld(props) {
    
    return (
        <Fragment>
            <div className="head">
                <div className="d-flex justify-content-around">
                    <p><Link to="/blogs">Check Out the Blogs!</Link></p>
                    <p><Link to="/add">Add Some New Content!</Link></p>
                </div>
                <span>
                    <h1 className="display-1 mx-auto d-block p-2 bg-primary text-center text-white">
                    <kbd>Welcome to BloggerBaby!</kbd></h1>
                </span>
            </div>
        
        </Fragment>
            
    )
};

export default HelloWorld;


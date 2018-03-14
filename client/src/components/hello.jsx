import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

function HelloWorld(props) {
    
    return (
        <Fragment>
            <div className="head">
                
                <span>
                    <div className="display-1 mx-auto d-block p-2 bg-light text-center ">
                        <kbd className="text-white">Welcome to BloggerBaby!</kbd>
                        <p className="lead mt-2"> Once you go <strong><em>Baby</em></strong>, you'll never go Back. </p>
                    </div>
                    
                </span>
            </div>
        
        </Fragment>
            
    )
};

export default HelloWorld;


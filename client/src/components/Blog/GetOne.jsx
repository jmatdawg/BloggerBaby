import React from 'react';
import { Link } from 'react-router-dom';

function getOne(props) {
    return (    
        <div className="card w-50 p-3 mx-auto ">
            <div className="card-block" key={props.blogs.id}>
                <strong className="text-center"> <h2> { props.blogs.title }</h2></strong>
                <p className="text-right"> { props.blogs.content }</p>
            </div>
        </div>
    )
}   

export default getOne;
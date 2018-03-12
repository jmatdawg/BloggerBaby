import React from 'react';
import { Link } from 'react-router-dom';

function getOne(props) {
    return (    
        <div className="card w-50 p-3 mx-auto ">
            <div className="card-block" key={props.blogs.id}>
                <h4 className="card-title">Baby, this new Blog is about... { props.blogs.title }</h4>
                <p className="card-text">Content: { props.blogs.content }</p>
                <p className="text-right"><Link to={`/blogs/${props.blogs.id}`}>Check Me Out, Baby!</Link></p>
            </div>
        </div>
    )
}   

export default getOne;
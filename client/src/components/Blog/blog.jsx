import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

function Blog(props) {
    
    return (
    
        <div className="card w-50 p-3 mx-auto mb-3 border border-dark">
            <div className="card-block" key={props.blogs.id}>
                <p className="card-title lead em">
                    <em>Baby, this Blog is about...</em>
                </p> 
                <h3>
                    <kbd>
                        { props.blogs.title }
                    </kbd>
                </h3>
                <p className="card-text small">Content: { props.blogs.content }</p>
                <p className="text-right lead"><Link to={`/blogs/${props.blogs.id}`}>Check Me Out, Baby!</Link></p>
            </div>
        </div>
    )
}

export default Blog;
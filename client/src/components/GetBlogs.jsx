import React from 'react';
import { render } from 'react-dom';
import Blog from './blog';
import { Link } from 'react-router-dom';

function GetBlogs(props) {

    const blogList = props.config.map((blog) => {
        return (
            <div key={ blog.id }>  
                <Blog blogs={ blog }/>
            </div>
        ); 
    });
        return (
            <div>
                { blogList }
            </div>
        );
}

export default GetBlogs;
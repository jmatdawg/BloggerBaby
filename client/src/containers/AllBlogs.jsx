import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import GetBlogs from '../components/GetBlogs';

class AllBlogs extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            blogs: []
         };
    }
    componentDidMount() {
        fetch("http://localhost:3000/api/blogs")
            .then(response => response.json())
            .then(blog => this.setState({blogs: blog}))
    }

    render() {
       return (
           <Fragment>
               <GetBlogs config={ this.state.blogs } />
            </Fragment>
       );
    }
}

export default AllBlogs;

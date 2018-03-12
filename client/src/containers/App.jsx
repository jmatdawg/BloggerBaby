import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from '../components/hello';
import AllBlogs from './AllBlogs';
import blog from '../components/blog';
import InputBlog from './InputBlog';
import BlogById from '../components/BlogById';
import Donate from '../components/donate';


class App extends Component {
    
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={ HelloWorld } />
                        <Route exact path="/blogs" component={ AllBlogs } />
                        <Route exact path="/add" component={ InputBlog }/>
                        <Route exact path="/blogs/:id" component={ BlogById }/>
                        <Route path="/donate" component={ Donate } />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;
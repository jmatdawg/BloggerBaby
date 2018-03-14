import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from '../components/hello';
import AllBlogs from './AllBlogs';
import blog from '../components/Blog/blog';
import InputBlog from './InputBlog';
import BlogById from '../components/Blog/BlogById';
import Donate from '../components/Mailgun/donate';
import Contact from '../components/Stripe/contact';


class App extends Component {
    
    render() {
        return (
            <Router>
                <Fragment>
                <div className="d-flex justify-content-around">
                    <p><Link to="/" className="text-light lead">Baby, Come Home</Link></p>
                    <p><Link to="/blogs" className="text-light lead">Check Out the Blogs!</Link></p>
                    <p><Link to="/add" className="text-light lead">Add Some New Content!</Link></p>
                    <Link to="/contact" className="text-light lead"> Slide In Our DMs!</Link>
                    <Link to="/donate" className="text-light lead"> Donate </Link>
                </div>
                    <Switch>
                        <Route exact path="/" component={ HelloWorld } />
                        <Route exact path="/blogs" component={ AllBlogs } />
                        <Route exact path="/add" component={ InputBlog }/>
                        <Route exact path="/blogs/:id" component={ BlogById }/>
                        <Route exact path="/donate" component={ Donate } />
                        <Route exact path="/contact" component={ Contact }/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;
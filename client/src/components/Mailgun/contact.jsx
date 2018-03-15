import React, { Component } from 'react';
import { sendContactEmail } from '../../services/contact';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleName(name) {
        this.setState({ name });
    }

    handleEmail(email) {
        this.setState({ email });
    }

    handleMessage(message) {
        this.setState({ message });
    }

    //the form will reload the page and won't send the POST request when using onSubmit, so you need e.prevent
    handleSubmit(e) {
        e.preventDefault();
        sendContactEmail(this.state.name, this.state.email, this.state.message)
        .then(() => {//redirect to the home page. later i can add "thanks we recieved your message folder here"
        this.props.history.push('/'); //will send me to homepage
        }) .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="container">
                
                <form className="bg-dark border" onSubmit={ (e) => this.handleSubmit(e) }>
                <div className="mb-3">
                    <h3><kbd>It goes down in our DM!</kbd></h3>
                </div>
                    <div className="form-group">
                        <label htmlFor="name" className="lead text-light">Name</label>
                        <input 
                            onChange={ (e) => this.handleName(e.target.value) }
                            id="name" 
                            type="text" 
                            className="form-control" 
                            require 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="text-light lead">Email</label>
                        <input
                            onChange={ (e) => this.handleEmail(e.target.value) }
                            id="email" 
                            type="email" 
                            className="form-control" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            onChange={ (e) => this.handleMessage(e.target.value) }
                            cols="30" 
                            rows="10" 
                            className="form-control">
                        </textarea>
                    </div>
                    <input type="submit" className="btn btn-sm btn-primary text-uppercase"/>
                </form>
            </div>
        )
    }
}


export default Contact;

//these classes are BOOTSTRAP classes
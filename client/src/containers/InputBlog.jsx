import React, { Component, Fragment } from 'react';
import AddBlog from '../components/Blog/AddBlog';

class InputBlog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: ""
         };

         this.onTitleChange = this.onTitleChange.bind(this); 
         this.onContentChange = this.onContentChange.bind(this);
         this.onClick = this.onClick.bind(this);
    }
    
    onTitleChange(event){
        console.log("Title: ", event.target.value);
        this.setState({
            title: event.target.value
        })
    }

    onContentChange(event){
        console.log("Content: ", event.target.value);
        this.setState({
            content: event.target.value
        })
    }

    onClick() {
        // console.log("Title: ", this.state.title);
        // console.log("content: ", this.state.content);
        fetch("http://localhost:3000/api/blogs", {
            method: 'POST',
            body: JSON.stringify({title: this.state.title, content: this.state.content}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .catch((error) => {
            console.error('Error:', error)
            res.sendStatus(400);
        })

        this.props.history.push("/blogs"); //will go to the BlogList screen after each new blg is posted
    }

  
    render() {
        return (
            <AddBlog titleHandler={this.onTitleChange} contentHandler={this.onContentChange} newBlogSubmit={this.onClick}/>
        )
    }
}

export default InputBlog;



import React, {Component, Fragment} from 'react'
import GetOne from './GetOne';

class BlogById extends Component {
    constructor(props) {
       super (props);

       this.state= {
           one: []
       };
    }

    onBtnClick(event) {
        fetch(`http://localhost:3000/api/blogs/${this.props.match.params.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .catch((error) => {
            console.error('Error:', error)
     
        })

        this.props.history.push("/blogs/");
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/blogs/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(one => this.setState({one}))
    }

    render() {
        return (
            <div>
                <GetOne blogs={ this.state.one }/>
                <button className="btn btn-sm btn-primary" onClick={ (event) => {this.onBtnClick(event)} }>
                    LET IT GO, BABY!
                </button>
                
            </div>
        );
    }
}

export default BlogById;
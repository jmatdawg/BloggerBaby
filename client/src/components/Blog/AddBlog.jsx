import React from 'react';
import { render } from 'react-dom';


function AddBlog(props) {
    
    return (
        <div className="flex-container p-3 w-75 bg-light mx-auto border border-dark rounded">
            <h1 className=" pb-3 text-center"><kbd>This is your creative space, Baby!</kbd></h1>
            <div className="text-center">
                <input 
                    placeholder="What you wanna talk about?" 
                    className="w-50"
                    onChange={props.titleHandler}
                    />
                <form className="small bg-dark">
                    <div className="form-group text-center">
                        <label className="text-light">Content:</label>
                        <br/>
                        <textarea 
                            className="w-50" 
                            cols="30" rows="5" 
                            id="comment"
                            onChange={props.contentHandler}>
                        </textarea>
                    </div>
                </form>
                <button className="btn btn-sm btn-primary" onClick={props.newBlogSubmit}> Lay it on me!</button>
            </div>
        </div>
    )
}
export default AddBlog;
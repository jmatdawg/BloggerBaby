import React from 'react';
import { render } from 'react-dom';


function AddBlog(props) {
    
    return (
        <div className="flex-container">
            <h1 className="display-4 text-center">This is your creative space, Baby!</h1>
            <div className="text-center">
                <input 
                    placeholder="Baby, what you wanna talk about?" 
                    className="w-50"
                    onChange={props.titleHandler}
                    />
                <form>
                    <div className="form-group text-center">
                    <label >Content:</label>
                    <br/>
                    <textarea 
                        className="w-50" 
                        cols="30" rows="5" 
                        id="comment"
                        onChange={props.contentHandler}>
                    </textarea>
                    </div>
                </form>
                <button onClick={props.newBlogSubmit}> LAY IT ON ME!</button>
            </div>
        </div>
    )
}
export default AddBlog;
import React, { Component } from 'react';

class NewPost extends Component {
    

    titleRef = React.createRef();
    textRef  = React.createRef();

    createPost = (e) => {
        e.preventDefault();

        const post = {
            title : this.titleRef.current.value,
            body  : this.textRef.current.value,
            userId: 1
        }
        
        this.props.createPost(post);
    }
    
    render() {
        return (
            <form onSubmit={this.createPost} className="col-8">
                <legend className="text-center">Create new post</legend>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" ref={this.titleRef} className="form-control" placeholder="Title for post"/>
                </div>
                <div className="form-group">
                    <label>Text:</label>
                    <textarea ref={this.textRef} className="form-control" placeholder="text for the post"></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Create</button>
                </div>

            </form>
        );
    }
}

export default NewPost;
import React, { Component } from 'react';

class EditSinglePost extends Component {

    titleRef = React.createRef();
    textRef  = React.createRef(); 

    editPost = (e) => {
        e.preventDefault();

        const post = {
            title : this.titleRef.current.value,
            body : this.textRef.current.value,
            userId: 1,
            id : this.props.postInfo.id
        }

        this.props.editPost(post);
    }

    loadForm = () => {
        
        if (!this.props.postInfo) return null;

        const {title, body} = this.props.postInfo;

        return (
            <form onSubmit={this.editPost} className="col-8">
                <legend className="text-center">Edit post</legend>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" defaultValue={title} ref={this.titleRef} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Text:</label>
                    <textarea ref={this.textRef} defaultValue={body} className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Edit</button>
                </div>

            </form>
        )
    }

    render() {

        return (
            <React.Fragment>

                 {this.loadForm()}

            </React.Fragment>
          
        );
    }
}

export default EditSinglePost;
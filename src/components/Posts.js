import React, { Component } from 'react';
import PostList from './PostList';

class Posts extends Component {

    render() { 
        return ( 

             <div className="col-12 col-md-8">
                 <h2 className="text-center">Post</h2>
                 <PostList deletePost={this.props.deletePost} posts={this.props.posts} />
             </div>   
             
         );
    }
}
 
export default Posts;
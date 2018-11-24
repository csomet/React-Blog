import React, { Component } from 'react';
import RowPost from './RowPost';

class PostList extends Component {
    

    showPost = () => {
        const posts = this.props.posts;
        
        if(posts.length === 0) return null;

        return (
                <React.Fragment>

                    {Object.keys(posts).map( key => (
                        <RowPost deletePost={this.props.deletePost} key={key} info={posts[key]}/>
                    ))}

                </React.Fragment>
        )
    }

    render() { 
        return ( 
        
            <table className="table">
                <thead>

                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.showPost()}
                </tbody>

            </table>
        
        );
    }
}
 
export default PostList;
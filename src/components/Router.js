import React, { Component } from 'react';
import axios from 'axios';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Posts from './Posts';
import SinglePostView from './SinglePostView';
import EditSinglePost from './EditSinglePost';
import New from './New';
import swal from 'sweetalert2';

class Router extends Component {
    state = { 
        posts : []
     }

     componentDidMount(){
         this.getPosts();
     }

     getPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
               this.setState({
                   posts : response.data
               })
            })
     }

     deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then( response => {
                if (response.status === 200){
                    //once is deleted from API go to local delete 
                    const posts = [...this.state.posts];

                    let result = posts.filter( i => (
                        i.id !== id
                    ))

                    this.setState({
                        posts : result
                    })
                }
            })
     }


     createPost = (post) => {
        
        axios.post(`https://jsonplaceholder.typicode.com/posts/`, {post})
        .then( response => {
            
           if (response.status === 201){

                let id = {id: response.data.id}
                const newPost = Object.assign({}, response.data.post, id);

                this.setState( prevState => ({
                    posts: [...prevState.posts, newPost]
                }))

           }
            
            
        })
     }

     editPost = (updatedPost) => {
         
        axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, {updatedPost})
        .then( response => {
            if (response.status === 200){
                //this.getPosts() Would get from real API rest data updated to our State. This is not the case.
                
                swal(
                    'Post Updated!',
                    `The post ${updatedPost.id} was successfully updated`,
                    'success'
                )

                const posts = [...this.state.posts];
                let id = response.data.id;

                //data id is not the same of array index so we need the post in the position which it is.
                const indexPost = posts.findIndex( post => post.id === id);

                posts[indexPost] = updatedPost;

                this.setState ({
                    posts
                })

            }
        })
     }

    render() { 
        return (  
                <BrowserRouter >

                        <div className="container">

                            <div className="row justify-content-center">
                                <Header />
                                <Navigation /> 
                                <Switch >
                                    
                                    <Route exact path="/" render={ () => {
                                        return (
                                            <Posts deletePost={this.deletePost} posts={this.state.posts}/>
                                        )
                                    }}/>

                                    <Route exact path="/post/:postId" render={ (props) => {
                                        
                                        let id = props.location.pathname.replace('/post/', '');

                                        /*let selectedPost = this.state.posts.filter( i => {
                                           return i.id == id
                                        }) This is the way using filter with {} in function */
                                        
                                        let selectedPost = this.state.posts.filter( i => (
                                            i.id === Number(id)
                                        ))
                                            
                                     
                                        return (
                                           <SinglePostView postInfo={selectedPost[0]}  />
                                        )
                                    }}

                                    />

                                      <Route exact path="/edit/:postId" render={ (props) => {
                                        
                                        let id = props.location.pathname.replace('/edit/', '');
                                        
                                        let selectedPost = this.state.posts.filter( i => (
                                            i.id === Number(id)
                                        ))
                                            
                                     
                                        return (
                                           <EditSinglePost editPost={this.editPost} postInfo={selectedPost[0]}  />
                                        )
                                    }}

                                    />

                                    <Route exact path="/new" render={ () => {
                                        return (

                                        <New createPost={this.createPost}/>

                                        )
                                    }}/>
                                </Switch>
                            </div>

                        </div>
                
                
                
                </BrowserRouter>

        );
    }
}
 
export default Router ;
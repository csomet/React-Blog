import React, {Component} from 'react';

class SinglePostView extends Component {
   
    //This way can prevent undefined values first time accessing values directly from render -> return. 
    //so we use functions.
    
    showData = (props) => {
        
        if (!props.postInfo) return null;
        const {userId, title, body} = props.postInfo;

        return (

            <React.Fragment>
                <h1>{title}</h1>
                <p>Author: { userId}</p>
                <p>{body}</p>
            </React.Fragment>
        )
    }

    render() { 
        return (  
            <div className="col-12 col-md-8">
                {this.showData(this.props)}
            </div>
        );
    }
}
 
export default SinglePostView;
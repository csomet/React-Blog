import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert2';

class RowPost extends Component {
    
    
     //If you call directly this.props.deletePost you should do like this: onClick={ ()=> this.props.deletePost(id)}
    //instead of using this function:

    confirmationOnDelete = () => {

            const {id} = this.props.info;

            swal({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                type: "warning",
                showCancelButton : true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes!"
            })
            .then( (result) => {
                if (result.value){
                    this.props.deletePost(id);
                    swal('Deleted!', 'Your post was deleted', 'success')
                }
            })
    }


    render() {

         const {id, title} = this.props.info;

        return (
          <React.Fragment>

              <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-primary">V</Link>
                    <Link to={`/edit/${id}`} className="btn btn-warning">E</Link>
                    <button onClick={this.confirmationOnDelete} className="btn btn-danger" type="button">X</button>
                </td>
              </tr>
             
          </React.Fragment>
        );
    }
}

export default RowPost;
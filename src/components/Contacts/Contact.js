import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {

     state = {
          showContactInfo: false
     };
     
     onDeleteClick = async (id, dispatch) => {
       try{
            await axios
            .delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({type: 'DELETE_CONTACT', payload: id})
        } catch (e) {
             dispatch({type: 'DELETE_CONTACT', payload: id})
       }
     };

     render() {
          const { id, name, email, phone } = this.props.contact;
          const { showContactInfo } = this.state;
          return (

<Consumer>
     {value =>{

          const { dispatch } = value;
         return(
          <div className="card card-body mb-3">
           <h4>{name}{' '} <i className="fas fa-sort-down" onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })} style={{cursor:'pointer'}}/>
           <i className="fa fa-times" style={{cursor: 'pointer', float: 'right', color: 'red', textShadow: '2px 2px 2px black'}}
           onClick={this.onDeleteClick.bind(this, id, dispatch)}
            />

            <Link to={`contact/edit/${id}`}>
              <i 
                className="fa fa-pen-alt" 
                style={{
                  cursor: 'pointer',
                  color: 'black',
                  float: 'right',
                  marginRight: '1em'
                }}
                
              />
            </Link>

            </h4>
           {showContactInfo ? (
           <ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
           </ul>) : null}
          </div>
         ) 
     }}
</Consumer>
    )
  }
}

Contact.propTypes = {
     contact: PropTypes.object.isRequired     
}  

export default Contact;

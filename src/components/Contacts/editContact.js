import React, { Component } from 'react';
import { Consumer } from './Context';
import TextInputGroup from '../Layout/TextInputGroup'; 
import axios from 'axios';

class EditContact extends Component {

  state = {
     name: '',
     email: '',
     phone: '',
     errors: {}
  }

  async componentDidMount () {
     const { id } = this.props.match.params;
     const res = await axios
     .get(`http://jsonplaceholder.typicode.com/users/${id}`);

     const contact = res.data;
     this.setState({
          name: contact.name,
          email: contact.email,
          phone: contact.phone
     });
  }


  // e.target.name references the name attr in the inputs
  onChange = e => this.setState({ [e.target.name]: e.target.value });



  onSubmit = async (dispatch, e) => {
      e.preventDefault();
      const { name, email, phone } = this.state;

      //Error checking
      if(name ===''){
        this.setState({errors: { name: 'Name is required'}});
        return;
      }
      if(email ===''){
        this.setState({errors: { email: 'Email is required'}});
        return;
      }
      if(phone ===''){
        this.setState({errors: { phone: 'Phone is required'}});
        return;
      }

      const updContact = {
           name,
           email,
           phone
      }

      const { id } = this.props.match.params;
      const res = await axios
      .put(`http://jsonplaceholder.typicode.com/users/${id}`, updContact);
      dispatch({type: 'UPDATE_CONTACT', payload: res.data});


      // Clear State
      this.setState({
          name: '',
          email: '',
          phone: '',
          errors: {}
      });

      this.props.history.push('/');
  }






  render() {

    // Deconstructing the reference call to this.state.name etc
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
              <div className="card mb-3">
              <div className="card-header">Update Contact</div>
              <div className="card-body">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                <TextInputGroup 
                  label="Name"
                  name="name"
                  placeholder="Enter Name..."
                  value={name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextInputGroup 
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter Email..."
                  value={email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextInputGroup 
                  label="Phone"
                  name="phone"
                  placeholder="Enter Phone..."
                  value={phone}
                  onChange={this.onChange}
                  error={errors.phone}
                />
                  <input type="submit" value="Update Contact" className="btn btn-block" />
              </form>
              </div>
          </div>
          )
        }}
      </Consumer>
    );
  }
}

export default EditContact;
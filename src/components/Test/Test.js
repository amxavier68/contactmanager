import React, { Component } from 'react';


class Test extends Component {
     state = {
          title: '',
          body: ''
     };

     //2nd important lifecycle method 
     componentDidMount() {
          // Can fetch from APIs and other libraries
          console.log('componentDidMount...');
          fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => response.json())
          .then(data => this.setState({
               title: data.title,
               body: data.body
          }));
     }


     // componentWillMount() {
     //      console.log('componentWillMount...');
     // }


     // componentWillUpdate() {
     //      console.log('componentWillUpdate...');
     // }


     // componentWillReceiveProps(nextProps, nextState) {
     //      console.log('componentWillReceiveProps...');
     // }


     // static getDerivedStateFromProps(nextProps, prevState) {
     //      return {
     //           test: 'something'
     //      };
     // }

     // getSnapshotBeforeUpdate(preProps, prevState){
     //      console.log('getSnapshotBeforeUpdate...');
     // }
     

     render() {

     // deconstructing this.state
     const { title, body } = this.state;

     return (
          <div>
          <h1>{title}</h1>
          <p>{body}</p>
          </div>
     )
     }
}
export default Test;
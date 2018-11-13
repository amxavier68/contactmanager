import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from './Context';

class Contacts extends Component {
     render() {
          return(
               <Consumer>
               {value => {
                    const { contacts } = value;
                    return (
                    <React.Fragment>
                         <h1 className="display-4 mb-2">
                              <span className="text-danger" style={{textShadow: '3px 2px 2px black', fontWeight: 'Bold'}}>Contacts </span>
                              List
                         </h1>
                         {contacts.map(contact => (
                         <Contact 
                              key={contact.id}
                              contact={contact}
                         />
                    ))}
                    </React.Fragment>
                    )
               }}
               </Consumer>
          )
     }
}
export default Contacts;
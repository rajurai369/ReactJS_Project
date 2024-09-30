import React from 'react';

class Contact extends React.Component{
    render(){
        return (

            <div>
            <h1>Hello from contact</h1>
            <p>{this.props.user[0].name}</p>
        </div>

        );
    }

}

export default Contact;
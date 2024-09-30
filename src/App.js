import React from 'react';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Form from './components/Form';
class App extends React.Component{
    render(){
        let person=[
            {id:1, name:"raju"},
            {id:2, name:"ram"},
            {id:3, name:"shyam"},
        ]
        return (
            <div>
                <Navbar data="Hi i am raju"  />
                <Contact user={person} />
                <Form />
                

            </div>
        );
    }
}
export default App;
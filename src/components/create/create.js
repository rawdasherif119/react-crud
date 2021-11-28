import React ,{useState} from 'react';
import {Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSubmit =(e) => {
        e.preventDefault();
        axios.post('https://61a33278d5e8330017291f26.mockapi.io/crud', {
            firstName,
            lastName
        }).then((response) => {
            console.log(response)
            setFirstName('');
            setLastName('');
        }).catch(error => {
            console.log(error.message);
        });


    }

    return (
     <div>
         <div>
             <Link to='/'>Back</Link>
         </div>
  
      <Form onSubmit={handleSubmit}>
          <Form.Field>
           <label>First Name</label>
           <input
            name="fname"
            value={firstName}
            placeholder='First Name' 
            onChange={(e)=>setFirstName(e.target.value)}
            />
         </Form.Field>
         <Form.Field>
           <label>Last Name</label>
           <input
            name="lname"
            value={lastName}
            placeholder='Last Name' 
            onChange={(e)=>setLastName(e.target.value)}
           />
         </Form.Field>
         <Button type='submit'>Submit</Button>
      </Form>
      </div>
    );
};

export default Create;
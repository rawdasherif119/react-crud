import React ,{useEffect , useState} from 'react';
import {Link,useParams ,useNavigate} from 'react-router-dom';
import {Button, Form } from 'semantic-ui-react';
import axios from 'axios';


const Update = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        show()
    }, [])

    const show = () => {
        axios.get(`https://61a33278d5e8330017291f26.mockapi.io/crud/${id}`)
            .then((res) => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            }).catch(error => {
                console.log(error.message);
            });
    }

    const handleUpdate =(e) => {
        e.preventDefault();
                axios.put(`https://61a33278d5e8330017291f26.mockapi.io/crud/${id}`, {
                    firstName,
                    lastName
                })
            .then(() => {
                   navigate('/');
            }).catch(error => {
                console.log(error.message);
            });
        }



    return (
    <div>
         <div>
             <Link to='/'>Back</Link>
         </div>
  
       <Form onSubmit={handleUpdate}>
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
          <Button type='submit'>Update</Button>
       </Form>
    </div>
    );
};

export default Update;
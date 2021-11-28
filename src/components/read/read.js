import React ,{useState,useEffect} from 'react';
import {Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import  {Link} from 'react-router-dom';


const Read = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(`https://61a33278d5e8330017291f26.mockapi.io/crud`)
            .then((getData) => {
                setApiData(getData.data);
            }).catch(error => {
                console.log(error.message);
            });
    }

    const onDelete =(id) =>{
     axios.delete(`https://61a33278d5e8330017291f26.mockapi.io/crud/${id}`).then((res) => {
         getData()
     }).catch(error => {
         console.log(error.message);
     });
    }


    return (
        <div style={{ marginTop: 20 }}>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
               <Table.HeaderCell>Delete</Table.HeaderCell>
               <Table.HeaderCell>Update</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
              {apiData.map((data)=>{
                  return(
               <Table.Row key={data.id}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell><Button color="red" onClick={()=>onDelete(data.id)}>Delete</Button></Table.Cell>
               <Table.Cell>
                   <Link to={'/update/'+ data.id}>
                      <Button color="green">Update</Button>
                   </Link>
                   </Table.Cell>
               </Table.Row>
                  )
              })}

          </Table.Body>

        </Table>
  </div>
    );
};

export default Read;
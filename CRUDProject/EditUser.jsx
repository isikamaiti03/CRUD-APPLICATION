import { FormControl, FormGroup, InputLabel ,Input,Typography,Button,styled} from '@mui/material'
import React, { useEffect, useState } from 'react';
import { getUserData,adduser,editUser} from './Api';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const Container=styled(FormGroup)`
  width:35%;
  margin:5% auto 0 auto;
  &> div{
    margin-top:20px;
  }
`
const initialValues={
  name:'',
  username:'',
  email:'',
  phone:'',
}
const EditUser = () => {
  const [user,setUser]=useState(initialValues);
  const navigate=useNavigate();
  const {id}=useParams();
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
    console.log(user);
  }
  useEffect(()=>{
    getdata();
  },[]);
  const getdata=async()=>{
    let response=await getUserData(id);
    console.log(response);
    setUser(response.data);
  }
  const FormSubmit=async()=>{
    await editUser(user,id)
    // const res=await axios.post('http://localhost:3002/users',user);
    navigate('/all')
  }
  return (
    <div>
      <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={handleChange} name='name' value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={handleChange} name='username' value={user.username}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={handleChange} name='email' value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={handleChange} name='phone' value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button variant="contained" onClick={FormSubmit}>EDIT USER</Button>
        </FormControl>
      </Container>
    </div>
  )
}

export default EditUser

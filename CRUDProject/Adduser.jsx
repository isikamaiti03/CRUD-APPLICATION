import { FormControl, FormGroup, InputLabel ,Input,Typography,Button,styled} from '@mui/material'
import React, { useState } from 'react';
import { adduser } from './Api';
import { useNavigate } from 'react-router-dom';
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
const Adduser = () => {
  const [user,setUser]=useState(initialValues);
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
    console.log(user);
  }
  const FormSubmit=async()=>{
    await adduser(user)
    // const res=await axios.post('http://localhost:3002/users',user);
    navigate('/all')
  }
  return (
    <div>
      <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={handleChange} name='name'/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={handleChange} name='username'/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={handleChange} name='email'/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={handleChange} name='phone'/>
        </FormControl>
        <FormControl>
            <Button variant="contained" onClick={FormSubmit}>ADD USER</Button>
        </FormControl>
      </Container>
    </div>
  )
}

export default Adduser

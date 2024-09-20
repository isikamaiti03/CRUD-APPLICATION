import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUser,deleteApi} from './Api'
const StyledTable=styled(Table)`
  width:90%;
  margin:50px auto 0 auto;
`
const THead=styled(TableRow)`
    background:#000;
    &>th{
      color:White;
      font-size:20px;
    }
`
const TBody=styled(TableRow)`
  &> td{
  font-size:18px;
  }
`
const Alluser = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    getUserDetails(); 
  })
  const getUserDetails=async()=>{
      let response=await getUser();
      console.log(response)
      setUsers(response.data)
  }
  const deleteUserData=async(id)=>{
      await deleteApi(id);
      getUserDetails();
  }
  return (
    <StyledTable>
      <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Action</TableCell>
          </THead>
      </TableHead>
      <TableBody>
        {
          users.map(user=>(
          <TBody>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant='contained' component={Link} to={`/edit/${user.id}`}
               style={{marginRight:"10px"}}>EDIT</Button>
              <Button variant='contained' color="secondary" onClick={()=>deleteUserData(user.id)}>DELETE</Button>
            </TableCell>
          </TBody>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default Alluser

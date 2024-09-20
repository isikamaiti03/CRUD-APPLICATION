import axios from "axios";
const ADD_URL='http://localhost:3002/users';
export const adduser=async(data)=>{
    try{
        return await axios.post(ADD_URL,data);
    }
    catch(error){
        console.log("Error from AddUser API ",error.message);
    }
}
export const getUser=async()=>{
    try{
        return await axios.get(ADD_URL);
    }
    catch(error){
        console.log("Error by calling getApi ",error.message);
    }
}
export const getUserData=async(data)=>{
    try{
        return await axios.get(`${ADD_URL}/${data}`);
    }
    catch(error){
        console.log("Error by calling getuserApi ",error.message);
    }
}
export const editUser=async(data,id)=>{
    try{
        return await axios.put(`${ADD_URL}/${id}`,data)
    }
    catch(error){
        console.log("Error calling by EditApi",error.message);
    }
}
export const deleteApi=async(id)=>{
    try{
        return await axios.delete(`${ADD_URL}/${id}`)
    }
    catch(error){
        console.log("Error calling by deleteApi",error.message);
    }
}

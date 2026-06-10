import axios from 'axios';
const URL = 'http://localhost:8000';  // server URL 

export const addUser = async (data) =>{
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log("Error while creating API", error);
    }
}
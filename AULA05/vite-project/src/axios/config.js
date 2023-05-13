import axios from 'axios';

// criando modelo base de requisição 
const carrosFetch = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Content-Type": "application/json"
    }
});

export default carrosFetch;
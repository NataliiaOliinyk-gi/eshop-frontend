import axios from "axios";

// const backendInstance = axios.create({
//     baseURL: "https://eshop-a0nb.onrender.com/api"
// })

const backendInstance = axios.create({
    baseURL: "http://localhost:4000/api"
})

export default backendInstance; 
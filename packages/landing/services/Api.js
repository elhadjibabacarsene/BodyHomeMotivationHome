import Axios from 'axios';

const api = Axios.create({
  baseURL: "http://localhost:8000",//process.env.NEXT_PUBLIC_API,
  headers: {
    Accept: "application/json",
    "Content-Type" : "application/json"
  }
})

export default api;

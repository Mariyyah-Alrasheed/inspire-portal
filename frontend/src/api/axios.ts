import axios from "axios";

const base_URL= "http://localhost:5273"

const api = axios.create({
    baseURL: `${base_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    }
})

export default api;
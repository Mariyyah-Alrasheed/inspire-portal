import api from "./axios";
import type { LoginData } from "../types/authTypes";


export const login = async (data:LoginData) => {
    const res = await api.post("/auth/login", data);
    console.log("Token:", res.data.token);

    return res.data
}
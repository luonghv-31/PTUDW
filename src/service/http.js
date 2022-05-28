import axios from "axios";


const URI = `https://trungdeptry.uetbc.xyz`;

const http = axios.create({ baseURL: URI });
http.defaults.headers.common["Content-Type"] = "application/json";

const token = async () => {
    return localStorage.getItem("token");
};

http.defaults.headers.common["Authorization"] = `Bearer ${token()}`;

export default http;
import http from './http.js'

export const login = async({userName , password}) => {
    let url = '/signin'
    let {data} = await http.post(url,{userName,password})
    localStorage.setItem("token", data.reason.token);
    return data
}

export const logout = () => {
    localStorage.removeItem("token");
}

export const getToken = () => {
    let token = localStorage.getItem("token");
    return token
}
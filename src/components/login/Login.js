import React, { useState, useEffect } from "react";
import "./login.css";
import * as AuthService from '../../service/auth'
// import { useAsyncFn } from "react-use";
// //import * as actions from "./../../actions/index";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


 function Login(props) {
        const navigate = useNavigate()
         const [login, setLogin] = useState({
             userName: '',
             password: ''
         })

         const [message,setMessage] = useState('')

      const handleLoginOnclick = (e) => {
        e.preventDefault();
        AuthService.login(login).then(res => {
            console.log("login", res.code)
            if(res.code === 200 ) {
                navigate('/')
                console.log()
            } else {
                setMessage("Đăng nhập thất bại")
            }
        }).catch(err => {
            console.log(err.reason)
        })
      }
      console.log("tokebn",AuthService.getToken())
      const handleOnchange = (e) => {
          setLogin({
              ...login,
              [e.target.name]: e.target.value
          })
      }

    return (
        <div id="login">
            <div className="wall-image">
                <img src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?cs=srgb&dl=pexels-stephan-seeber-1261728.jpg&fm=jpg">

                </img>
            </div>
            <div className="form-container">
                <form>
                    <div className='login-title'>
                        <span>Đăng nhập</span>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Tài khoản"
                            name="userName"
                            value={login.userName}
                            onChange={handleOnchange}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            name="password"
                            value={login.password}
                            onChange={handleOnchange}
                            
                        ></input>
                    </div>
                    <div style={{color: "red", textAlign: "center"}}>{message}</div>
                    <div className="login-button">
                        <button onClick={handleLoginOnclick}>Đăng nhập</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login;
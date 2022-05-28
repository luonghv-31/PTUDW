import React from 'react'

import * as AuthService from '../../service/auth'
import { useNavigate } from "react-router-dom";

import 'antd/dist/antd.min.css';
import "./home.css"
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

export const Home = () => {
        const navigate = useNavigate()

        const handleLogout = () => {
        navigate('/login')
        AuthService.logout()
    }
    return (

        <div>
            
    <Layout>
      <Header>
      <div> 
          <button onClick={handleLogout}>logout</button>
          Header
          </div> </Header>
      <Content>
          <div className='box 1'>Quản lý cơ sở</div>
          <div className='box 2'>Quản lý giấy chứng nhận</div>
          <div className='box 3'>Quản lý hoạt động thanh kiểm tra</div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
        </div>
         
         );
}
 
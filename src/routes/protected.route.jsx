import { Navigate } from "react-router-dom";
import React from "react";
import * as AuthService from '../service/auth'
export const ProtectedRoute = ({ children }) => {
    const hasToken = () => {
        let token = AuthService.getToken()
        if(token === 'undefined') {
            return false
        }
        return token
    }
    return hasToken() ? children : <Navigate to="/login" />;
};
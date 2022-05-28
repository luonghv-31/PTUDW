
import React from 'react'
import Login from './components/login/Login';
import {Home} from './components/home/home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {ProtectedRoute} from './routes/protected.route'
const App = () => {
  return (
    <div>
        <Router> 
          <Routes>
            {/* <Route
              exact
              path="/"
              element={
                  <Home />
              }
            /> */}

            <Route
              path="/"
              element={
                <ProtectedRoute >
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/login"
              element={
                  <Login />
              }
            />
            
          </Routes>
        </Router>
    </div>
  )
}

export default App
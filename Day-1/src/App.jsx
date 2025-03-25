import React from 'react'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Home from './Home'
import ProtectedRoute from './Components/ProtectedRoute'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignUp />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/home' element={<ProtectedRoute> <Home /> </ProtectedRoute>}></Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
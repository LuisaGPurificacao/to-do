import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import Login from '../components/login/Login'
import Registro from '../components/registro/Registro'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
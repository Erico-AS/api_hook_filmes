import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home'
import Erico from './pages/erico'
import Melo from './pages/melo';

export default function AppRoutes() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/erico" element={<Erico />}></Route>
                <Route path="/melo" element={<Melo />}></Route>
            </Routes>
        </BrowserRouter>
        </>)
}
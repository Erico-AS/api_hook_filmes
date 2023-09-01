import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home'
import FilmesErico from './pages/erico'

export default function AppRoutes() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/erico" element={<FilmesErico />}></Route>
                <Route path="/melo"></Route>
            </Routes>
        </BrowserRouter>
        </>)
}
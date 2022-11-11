import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header';
import KeyHighlites from '../components/KeyHighlites';
import WebGIS from '../components/WebGIS';

function MainRoutes() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<KeyHighlites />}/>
        <Route path="webgis" element={<WebGIS />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
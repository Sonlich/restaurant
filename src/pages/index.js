import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './main'
import MenuPage from './menu'
import InformationPage from './information'
import ContactsPage from './contacts'
import BasketPage from './basket'
import MainHeader from '../components/header'

export function Pages() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/information" element={<InformationPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/basket" element={<BasketPage />} />
      {/* <Route path="*" element={<NotFound/>}/> */}
    </Routes>
  )
}

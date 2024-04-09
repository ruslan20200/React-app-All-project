import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import About from './About'
import Contacts from './Contacts'
import Header from './Header'
export default function Router() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contacts' element={<Contacts />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

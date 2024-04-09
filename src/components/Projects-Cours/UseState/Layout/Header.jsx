import React from 'react'

const Header = ({ children }) => {
	return (
		<div className='layout'>
			<header className='w-full h-16 flex justify-between items-center px-5'>
				<nav className='header_logo'>
					<h1 className='text-3xl font-bold text-purple-500 cursor-pointer'>
						My Web
					</h1>
				</nav>
				<nav className='header_link flex gap-3  transition-all duration-300 ease-in '>
					<a href='##' className='hover:underline'>
						Home
					</a>
					<a href='##' className='hover:underline'>
						About
					</a>
					<a href='##' className='hover:underline'>
						Contact
					</a>
				</nav>
			</header>
			{children}
		</div>
	)
}

export default Header

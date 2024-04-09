import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div>
			<div className="header-link">
				<ul>
					<li><Link to={"/"}>Home</Link></li>
					<li><Link to={"/abou"}>About</Link></li>
					<li><Link to={"/contacts"}>Contacts</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Header

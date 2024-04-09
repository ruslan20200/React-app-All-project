import './Burger.css'
import { useState } from 'react'
export default function Burger() {
	const [show, setShow] = useState(false)
	const togleShow = () => {
		setShow(!show)
	}
	return (
		<>
			<div className='Burger w-full h-[100vh]'>
				<div className='button-click'>
					<button
						onClick={togleShow}
						className='p-3 bg-slate-500 rounded-lg m-3 hover:bg-slate-400 hover:text-gray-800 transition-all duration-100 button-line text-white '
					>
						Menu
					</button>
				</div>
				<div
					className={`Burger__burger  w-[300px] h-full bg-blue-600 rounded-lg pt-3 ${
						show ? 'cloes' : ''
					}`}
				>
					<div
						className={`burger-links w-full flex flex-col justify-center items-center gap-4 ${
							show ? 'cloes' : ''
						}`}
					>
						<div className='burger-link'>
							<a href='##' className='hover:text-slate-300 transition-all '>
								Home
							</a>
						</div>
						<div className='burger-link'>
							<a href='##' className='hover:text-slate-300 transition-all '>
								About
							</a>
						</div>
						<div className='burger-link'>
							<a href='##' className='hover:text-slate-300 transition-all '>
								Contacts
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

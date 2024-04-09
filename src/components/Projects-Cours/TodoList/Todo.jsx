import React, { useEffect, useState } from 'react'

const Todo = () => {
	const [lists, setLists] = useState(
		JSON.parse(localStorage.getItem('lists')) || []
	)
	useEffect(() => {
		localStorage.setItem('lists', JSON.stringify(lists))
	}, [lists])
	const [value, setValue] = useState('')
	const Addlist = e => {
		e.preventDefault()

		let newList = { id: Date.now(), text: value }
		setLists([...lists, newList])
		setValue('')
	}

	function deleList(id) {
		setLists(lists.filter(l => l.id !== id))
	}


	function Checked(id) {
		setLists(
			lists.map(l => {
				if (l.id === id) {
					return { ...l, checked: !l.checked }
				} else {
					return l
				}
			})
		)
	}
	

	return (
		<>
			<div className='todo w-full h-[100vh] flex items-center justify-center'>
				<div className='w-[300px] p-5 shadow-lg bg-blue-100 flex flex-col justify-center rounded-lg gap-2'>
					<form className='flex gap-3'>
						<input
							type='text'
							value={value}
							onChange={e => setValue(e.target.value)}
							className='rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 p-2 '
						/>
						<input
							type='submit'
							value='add'
							onClick={e => Addlist(e)}
							className='bg-blue-400 text-white rounded-lg p-2 cursor-pointer hover:bg-blue-600 transition-all duration-300'
						/>
					</form>
					<ul className='list-disc list-inside'>
						{lists.map(l => (
							<li key={l.id} className='text-lg flex gap-2 my-1 cursor-default'>
								<span
									className={`text-xl col-white rounded-lg p-2 shadow-lg text-blue-300 bg-slate-600 ${
										l.checked && 'bg-blue-800 text-white'
									}`}
								>
									{l.text}
								</span>
								<button
									className='bg-red-500 text-white rounded-lg p-2 cursor-pointer hover:bg-red-600 transition-all duration-300'
									onClick={() => deleList(l.id)}
								>
									Delete
								</button>
								<button
									className='p-2 bg-orange-200 rounded-lg hover:bg-orange-600 transition-all duration-200'
									onClick={() => Checked(l.id)}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke-width='1.5'
										stroke='currentColor'
										class='w-6 h-6'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
										/>
									</svg>
								</button>
								<button
									className='p-3 bg-teal-800 rounded-lg hover:bg-teal-900 transition-all duration-300'								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke-width='1.5'
										stroke='white'
										class='w-6 h-6 '
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
										/>
									</svg>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default Todo

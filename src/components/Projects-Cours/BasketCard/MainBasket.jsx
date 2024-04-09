import Cards from './Cards'
import Basket from './AdedBasket'
import React, { useEffect, useState } from 'react'

export default function MainBasket(){
	const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || [])

	const addBasket = product => {
		const addedBasket = {
			check: product.check,
			id: product.id,
			img: product.img,
			quantity: product.quantity,
			price: product.price,
			text: product.text,
			text_one: product.text_one,
		}
		setBasket([...basket, addedBasket])	
	}
	useEffect(() => {
		localStorage.setItem('basket', JSON.stringify(basket))
	}, [basket])
	console.log(basket)
	return (
		<div className='flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700'>
			<Cards addBasket={addBasket} />
			<Basket basket={basket} setBasket={ setBasket} />
		</div>
	)
}
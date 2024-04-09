import React from 'react'

export default function Card({ product, addBasket }) {
	return (
		<div className='bg-white rounded-lg shadow-md p-4'>
			<img src={product.img} alt={product.text} className='w-full h-40 mb-4' />
			<h2 className='text-xl font-bold mb-2'>{product.text}</h2>
			<p className='text-gray-500'>{product.text_one}</p>
			<div className='flex justify-between items-center mt-4'>
				<span className='text-gray-700 font-bold'>${product.price}</span>
				<button
					onClick={() => addBasket(product)}
					className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'
				>	
					Add to Cart
				</button>
			</div>
		</div>
	)
}

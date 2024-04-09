
export default function Basket({ basket, setBasket }) {
	const DeleteList = id => {
		const NewBasket = basket.filter(item => item.id !== id)
		setBasket(NewBasket)
	}

	return (
		<div className='Section-Basket w-full h-full bg-blue-300 flex justify-center items-center'>
			<div className='Basket w-[500px] h-full bg-blue-600 '>
				<ul className='w-full '>
					{basket.map(product => (
						<li
							key={product.id}
							className='w-full flex items-center justify-evenly'
						>
							<img src={product.img} alt={product.text} className='w-24 h-24' />
							<h1 className='text-2xl font-bold'>{product.text}</h1>
							<p className='text-2xl font-bold'>{product.price}</p>
							<button
								className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md'
								onClick={() => DeleteList(product.id)}
							>
								Delete
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

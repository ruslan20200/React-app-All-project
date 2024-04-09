export default function Card({ product }) {
	return (
		<div className='bg-white shadow-lg rounded-lg overflow-hidden  hover:translate-x-2 transition-all duration-300 ease-out'>
			<img
				src={product.img}
				alt=''
				className='w-full h-56 object-cover object-center'
			/>
			<div className='p-4'>
				<h2 className='font-semibold text-lg'>{product.text}</h2>
			</div>
		</div>
	)
}

import Card from './Card'
export default function Cards() {
	let products = [
		{
			id: 1,
			img: 'https://picsum.photos/200/300',
			text: 'card',
		},
		{
			id: 2,
			img: 'https://picsum.photos/200/301',
			text: 'card',
		},
		{
			id: 3,
			img: 'https://picsum.photos/200/302',
			text: 'card',
		},
		{
			id: 4,
			img: 'https://picsum.photos/200/304',
			text: 'card',
		},
		{
			id: 5,
			img: 'https://picsum.photos/200/305',
			text: 'card',
		},
	]

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
			{products.map(product => (
				<Card key={product.id} product={product} />
			))}
		</div>
	)
}

import Card from './Card'
export default function Cards() {
	let products = [
		{
			id: 1,
			img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
			text: 'card',
		},
		{
			id: 2,
			img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
			text: 'card',
		},
		{
			id: 3,
			img: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
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

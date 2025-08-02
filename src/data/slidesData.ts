import { SlideItem } from '@/types/slideItem'

const slides: SlideItem[] = [
	{
		image: '/slides/slide1.png',
		title: 'Футболки патріотичні',
		buttonText: 'Переглянути',
		buttonLink: '/catalog',
	},
	{
		image: '/slides/slide2.png',
		title: 'Наліпки на замовлення',
		description: 'Прямокутні, фігурні, з ламінуванням',
		buttonText: 'Замовити',
		buttonLink: '/stickers',
	},
	{
		image: '/slides/slide3.png',
		title: 'Pink — Вражай кольором',
		description: 'Флаєри, листівки, постери',
		buttonText: 'Докладніше',
		buttonLink: '/pink',
	},
]

export default slides

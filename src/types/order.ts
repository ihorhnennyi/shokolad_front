import { CartItem } from './cart'

export type Order = {
	items: CartItem[]
	total: number
	user: {
		name: string
		phone: string
		address: string
	}
}

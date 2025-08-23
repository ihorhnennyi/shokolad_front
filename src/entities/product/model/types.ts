export type Product = {
	id: number | string
	title: string
	price: number
	description?: string
	images?: string[]
	inStock?: boolean
	sku?: string
	tags?: string[]
}

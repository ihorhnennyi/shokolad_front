export type Product = {
	id: number | string
	title: string
	price: number
	description?: string
	images?: string[]
	sku?: string
	inStock?: boolean
	tags?: string[]
}

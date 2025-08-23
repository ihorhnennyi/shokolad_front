import { apiGet } from '@/lib/api'
import type { Product } from '@/types/product'
import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import { notFound } from 'next/navigation'

type Props = { params: { id: string } }

async function getProduct(id: string): Promise<Product | null> {
	try {
		return await apiGet<Product>(`/api/products/${id}`, undefined, true)
	} catch {
		return null
	}
}

export default async function ProductPage({ params }: Props) {
	const product = await getProduct(params.id)
	if (!product) return notFound()

	return (
		<Stack spacing={2}>
			<Typography variant='h5' fontWeight={700}>
				{product.title}
			</Typography>
			<Card>
				<CardContent>
					<Typography color='text.secondary' mb={1.5}>
						{product.price.toLocaleString('uk-UA', {
							style: 'currency',
							currency: 'UAH',
						})}
					</Typography>
					<Typography variant='body1'>
						{product.description || 'Описание будет позже.'}
					</Typography>
					<Button
						variant='contained'
						sx={{ mt: 2 }}
						href={`/cart?add=${product.id}`}
					>
						В корзину
					</Button>
				</CardContent>
			</Card>
		</Stack>
	)
}

import { products } from '@/data/products'
import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import { notFound } from 'next/navigation'

type Props = { params: { id: string } }

export default function ProductPage({ params }: Props) {
	const product = products.find(p => String(p.id) === params.id)
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
					<Typography variant='body1'>{product.description}</Typography>
					<Button variant='contained' sx={{ mt: 2 }}>
						В корзину
					</Button>
				</CardContent>
			</Card>
		</Stack>
	)
}

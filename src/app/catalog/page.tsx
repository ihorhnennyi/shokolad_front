import { products as mockProducts } from '@/data/products'
import { apiGet } from '@/lib/api'
import type { Product } from '@/types/product'
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from '@mui/material'
import Link from 'next/link'

async function getProducts(): Promise<Product[]> {
	try {
		return await apiGet<Product[]>('/api/products', undefined, true)
	} catch {
		return mockProducts
	}
}

const formatUAH = (n: number) =>
	n.toLocaleString('uk-UA', { style: 'currency', currency: 'UAH' })

export default async function CatalogPage() {
	const products = await getProducts()

	return (
		<>
			<Typography variant='h5' fontWeight={700} mb={2}>
				Каталог
			</Typography>

			<div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
				{products.map(p => (
					<Card
						key={p.id}
						sx={{
							flex: '1 1 calc(33.333% - 16px)',
							minWidth: 250,
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography variant='subtitle1' fontWeight={600}>
								{p.title}
							</Typography>
							<Typography color='text.secondary' variant='body2' mt={0.5}>
								{formatUAH(p.price)}
							</Typography>
						</CardContent>

						<CardActions>
							<Button component={Link} href={`/product/${p.id}`} size='small'>
								Подробнее
							</Button>
							<Button
								component={Link}
								href={`/cart?add=${p.id}`}
								variant='contained'
								size='small'
							>
								В корзину
							</Button>
						</CardActions>
					</Card>
				))}

				{products.length === 0 && (
					<Typography color='text.secondary'>Товары не найдены.</Typography>
				)}
			</div>
		</>
	)
}

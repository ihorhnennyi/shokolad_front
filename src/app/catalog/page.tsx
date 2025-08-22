import { products } from '@/data/products'
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from '@mui/material'
import Link from 'next/link'

export default function CatalogPage() {
	return (
		<>
			<Typography variant='h5' fontWeight={700} mb={2}>
				Каталог
			</Typography>

			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '16px',
				}}
			>
				{products.map(p => (
					<Card
						key={p.id}
						sx={{
							flex: '1 1 calc(33.333% - 16px)', // 3 в ряд на больших экранах
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
								{p.price.toLocaleString('uk-UA', {
									style: 'currency',
									currency: 'UAH',
								})}
							</Typography>
						</CardContent>

						<CardActions>
							<Button component={Link} href={`/product/${p.id}`} size='small'>
								Подробнее
							</Button>
							<Button variant='contained' size='small'>
								В корзину
							</Button>
						</CardActions>
					</Card>
				))}
			</div>
		</>
	)
}

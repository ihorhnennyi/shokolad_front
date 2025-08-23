import { Product } from '@/types/product'
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from '@mui/material'
import Link from 'next/link'

type Props = { product: Product }

export default function ProductCard({ product }: Props) {
	return (
		<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography variant='subtitle1' fontWeight={600}>
					{product.title}
				</Typography>
				<Typography color='text.secondary' variant='body2' mt={0.5}>
					{product.price.toLocaleString('uk-UA', {
						style: 'currency',
						currency: 'UAH',
					})}
				</Typography>
			</CardContent>
			<CardActions>
				<Button component={Link} href={`/product/${product.id}`} size='small'>
					Подробнее
				</Button>
				<Button variant='contained' size='small'>
					В корзину
				</Button>
			</CardActions>
		</Card>
	)
}

import { CartItem } from '@/types/cart'
import { Box, Button, Typography } from '@mui/material'

type Props = { item: CartItem }

export default function CartItemView({ item }: Props) {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				py: 1,
				borderBottom: 1,
				borderColor: 'divider',
			}}
		>
			<Typography>{item.product.title}</Typography>
			<Typography color='text.secondary'>
				{item.product.price.toLocaleString('uk-UA', {
					style: 'currency',
					currency: 'UAH',
				})}
			</Typography>
			<Box sx={{ display: 'flex', gap: 1 }}>
				<Button size='small'>-</Button>
				<Typography>{item.quantity}</Typography>
				<Button size='small'>+</Button>
			</Box>
		</Box>
	)
}

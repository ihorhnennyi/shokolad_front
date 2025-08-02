'use client'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Badge, IconButton, useTheme } from '@mui/material'

interface CartButtonProps {
	count?: number
	onClick?: () => void
}

const CartButton = ({ count = 0, onClick }: CartButtonProps) => {
	const theme = useTheme()

	return (
		<IconButton onClick={onClick} sx={{ p: 1.2 }}>
			<Badge badgeContent={count} color='secondary'>
				<ShoppingCartIcon
					sx={{ color: theme.palette.text.primary, fontSize: 26 }}
				/>
			</Badge>
		</IconButton>
	)
}

export default CartButton

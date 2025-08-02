'use client'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IconButton, useTheme } from '@mui/material'

const CartButton = () => {
	const theme = useTheme()

	return (
		<IconButton>
			<ShoppingCartIcon
				sx={{ color: theme.palette.text.primary, fontSize: 26 }}
			/>
		</IconButton>
	)
}

export default CartButton

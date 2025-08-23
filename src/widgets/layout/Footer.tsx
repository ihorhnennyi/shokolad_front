import { Box, Typography } from '@mui/material'

export default function Footer() {
	return (
		<Box
			component='footer'
			sx={{
				mt: 4,
				py: 3,
				textAlign: 'center',
				borderTop: 1,
				borderColor: 'divider',
			}}
		>
			<Typography variant='body2' color='text.secondary'>
				© {new Date().getFullYear()} MyShop. Все права защищены.
			</Typography>
		</Box>
	)
}

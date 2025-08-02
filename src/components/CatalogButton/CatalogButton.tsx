'use client'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { Box, Button, useTheme } from '@mui/material'

const CatalogButton = () => {
	const theme = useTheme()

	return (
		<Button
			variant='contained'
			color='primary'
			sx={{
				px: 3,
				py: 1.2,
				minWidth: 220,
				boxShadow: 'none',
				borderRadius: `theme.shape.borderRadius / 2`,
				textTransform: 'none',
				fontWeight: 600,
				'&:hover': {
					bgcolor: theme.palette.primary.dark,
				},
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<ListAltIcon sx={{ mr: 1 }} />
					<span>Каталог</span>
				</Box>
				<ExpandMoreIcon />
			</Box>
		</Button>
	)
}

export default CatalogButton

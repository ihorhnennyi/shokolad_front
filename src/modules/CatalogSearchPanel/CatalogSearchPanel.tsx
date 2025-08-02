'use client'

import CartButton from '@/components/CartButton/CartButton'
import CatalogButton from '@/components/CatalogButton/CatalogButton'
import SearchField from '@/components/SearchField/SearchField'
import { Box, Container, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const CatalogSearchPanel = () => {
	const theme = useTheme()

	return (
		<Box
			sx={{
				bgcolor: theme.palette.background.paper,
				py: 1.5,
				borderBottom: `1px solid ${theme.palette.divider}`,
			}}
		>
			<Container maxWidth='xl'>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
					gap={2}
				>
					<Stack
						direction='row'
						alignItems='center'
						spacing={2}
						sx={{ flex: 1 }}
					>
						<CatalogButton />
						<SearchField />
					</Stack>

					<CartButton />
				</Stack>
			</Container>
		</Box>
	)
}

export default CatalogSearchPanel

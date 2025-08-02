'use client'

import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link
			href='/'
			style={{ display: 'flex', alignItems: 'center', height: '100%' }}
		>
			<Box sx={{ height: 48, display: 'flex', alignItems: 'center' }}>
				<Image
					src='/logo.webp'
					alt='Реклама & Шоколад'
					width={220}
					height={60}
					style={{
						objectFit: 'contain',
						height: 'auto',
						maxWidth: '100%',
					}}
					priority
				/>
			</Box>
		</Link>
	)
}

export default Logo

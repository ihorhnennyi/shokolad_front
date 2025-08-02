'use client'

import { Container } from '@mui/material'
import Image from 'next/image'

export default function HomePage() {
	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Image src='/logo.webp' alt='Реклама & Шоколад' width={220} height={60} />
		</Container>
	)
}

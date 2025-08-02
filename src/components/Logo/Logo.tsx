'use client'

import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link
			href='/'
			style={{ display: 'flex', alignItems: 'center', height: '100%' }}
		>
			<Image
				src='/logo.webp'
				alt='Реклама & Шоколад'
				width={220}
				height={60}
				style={{ objectFit: 'contain', height: 'auto' }}
			/>
		</Link>
	)
}

export default Logo

'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Box, useTheme } from '@mui/material'
import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import slides from '@/data/slidesData'
import './BannerSlider.css'
import SlideContent from './SlideContent'

const BannerSlider = () => {
	const theme = useTheme()
	const borderRadius = Number(theme.shape.borderRadius) / 2

	return (
		<Box
			sx={{
				mt: 10,
				maxWidth: 970,
				width: '100%',
				overflow: 'hidden',
				mx: 'auto',
				borderRadius,
			}}
		>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 5000 }}
				loop
				className='custom-swiper'
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<Box
							sx={{
								position: 'relative',
								width: '100%',
								minHeight: { xs: 320, sm: 400, md: 460 },
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								px: 4,
								py: 4,
								backgroundColor: theme.palette.grey[200],
								borderRadius,
							}}
						>
							<Image
								src={slide.image}
								alt={slide.title}
								fill
								style={{
									objectFit: 'cover',
									zIndex: 1,
									borderRadius: `${borderRadius}px`,
								}}
							/>

							<Box
								sx={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: '100%',
									background:
										'linear-gradient(to right, rgba(215, 215, 215, 0.62) 40%, rgba(255,255,255,0) 80%)',
									zIndex: 2,
									borderRadius,
								}}
							/>

							<SlideContent slide={slide} />
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	)
}

export default BannerSlider

import { SlideItem } from '@/types/slideItem'
import { Box, Button, Typography, useTheme } from '@mui/material'
import { FC } from 'react'

interface Props {
	slide: SlideItem
}

const SlideContent: FC<Props> = ({ slide }) => {
	const theme = useTheme()

	return (
		<Box sx={{ position: 'relative', zIndex: 3, maxWidth: 420, ml: 10 }}>
			<Typography
				variant='h4'
				fontWeight={700}
				mb={2}
				sx={{ color: theme.palette.text.primary }}
			>
				{slide.title}
			</Typography>
			{slide.description && (
				<Typography
					variant='body1'
					mb={3}
					sx={{ color: theme.palette.text.secondary }}
				>
					{slide.description}
				</Typography>
			)}
			{slide.buttonText && slide.buttonLink && (
				<Button
					variant='contained'
					color='primary'
					href={slide.buttonLink}
					sx={{
						borderRadius: 0.75,
						px: 4,
						py: 1.5,
						fontWeight: 600,
					}}
				>
					{slide.buttonText}
				</Button>
			)}
		</Box>
	)
}

export default SlideContent

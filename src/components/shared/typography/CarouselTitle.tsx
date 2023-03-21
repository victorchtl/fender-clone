import { Typography } from '@mui/material'
import React from 'react'
import { CarouselTextInterface } from '../../../interfaces/CarouselText.interface'

export const CarouselTitle = ({ color, text }: CarouselTextInterface) => {
    return (
        <Typography
            color={color}
            fontWeight={800}
            fontSize={'2rem'}
            sx={{
                textTransform:'uppercase'
            }}
        >
            {text}
        </Typography>
    )
}

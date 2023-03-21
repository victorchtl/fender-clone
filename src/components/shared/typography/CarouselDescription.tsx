import { Typography } from '@mui/material'
import React from 'react'
import { CarouselTextInterface } from '../../../interfaces/CarouselText.interface'

export const CarouselDescription = ({ color, text }: CarouselTextInterface) => {
    return (
        <Typography
            color={color}
            fontWeight={300}
            fontSize={'.9rem'}
            sx={{
                '&::first-letter':{
                    textTransform:'uppercase'
                }
            }}
        >
            {text}
        </Typography>
    )
}

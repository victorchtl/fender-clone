import { Typography } from '@mui/material'
import React from 'react'
import { CarouselTextInterface } from '../../../interfaces/CarouselText.interface';

export const CarouselIntro = ({ color, text }: CarouselTextInterface) => {
    return (
        <Typography
            color={color}
            fontWeight={300}
            fontSize={'.9rem'}
            sx={{
                textTransform:'uppercase'
            }}
        >
            {text}
        </Typography>
    )
}

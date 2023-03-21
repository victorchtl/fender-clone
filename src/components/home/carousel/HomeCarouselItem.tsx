import { Box, Button, Typography } from '@mui/material'
import React from 'react'

interface Item {
    id: number
    bg: string,
    intro: string,
    title: string,
    description: string,
    img: string,
    url: string
}

export const HomeCarouselItem = ({ item }) => {
    return (
        <Box width={'100%'} height={'100%'} sx={{
            backgroundImage: `url('${item.img}')`, backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Typography color={item.bg === 'light' ? 'black' : 'white'}>{item.intro}</Typography>
            <Typography color={item.bg === 'light' ? 'black' : 'white'}>{item.title}</Typography>
            <Typography color={item.bg === 'light' ? 'black' : 'white'}>{item.description}</Typography>
            <Button variant='contained'>ACHETER</Button>
        </Box>
    )
}

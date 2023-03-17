import { Box, Button, Typography } from '@mui/material'
import React from 'react'

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

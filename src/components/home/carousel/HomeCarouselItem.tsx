import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { CarouselDescription } from '../../shared/typography/CarouselDescription'
import { CarouselIntro } from '../../shared/typography/CarouselIntro'
import { CarouselTitle } from '../../shared/typography/CarouselTitle'

interface Item {
    id: number
    bg: string,
    intro: string,
    title: string,
    description: string,
    img: string,
    url: string
}

export const HomeCarouselItem = ({ item }: { item: Item }) => {
    return (
        <Box width={'100%'} height={'100%'} sx={{
            backgroundImage: `url('${item.img}')`, backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Box width={'50%'} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} ml={3}>
                <CarouselIntro color={item.bg === 'light' ? 'black' : 'white'} text={item.intro} />
                <CarouselTitle color={item.bg === 'light' ? 'black' : 'white'} text={item.title} />
                <CarouselDescription color={item.bg === 'light' ? 'black' : 'white'} text={item.description} />
                <Box mt={2}>
                    <Button variant='contained'>ACHETER</Button>
                </Box>
            </Box>
        </Box>
    )
}

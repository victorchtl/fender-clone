import { Box } from '@mui/material'
import React, { useState } from 'react'
import { homeCarouselData } from '../../../data/HomeCarouselData'
import { HomeCarouselItem } from './HomeCarouselItem'

export const HomeCarousel = () => {

  const data = homeCarouselData
  const [carouselIndex, setCarouselIndex] = useState<number>(0)

  return (
    <Box
      position={'relative'}
      width={'100%'}
      display={'grid'}
      gridAutoFlow={'column'}
      gridAutoColumns={`100%`}
      overflow={'scroll'}
      sx={{
        '::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      <Box position={'absolute'} display={'flex'} zIndex={999} sx={{ top: '90%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {homeCarouselData.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: '50px',
              height: '2px',
              bgcolor: index === carouselIndex ? 'primary.main' : 'text.secondary',
              cursor: 'pointer'
            }}
            m={1}
            onClick={() => setCarouselIndex(index)}
          />
        ))}
      </Box>
      {homeCarouselData.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: '100%', aspectRatio: '5/2',
            transform: `translateX(-${carouselIndex * 100}%)`,
            transition: 'all .5s ease-in-out'
          }}
        >
          <HomeCarouselItem item={item}/>
        </Box>
      ))}
    </Box>
  )
}

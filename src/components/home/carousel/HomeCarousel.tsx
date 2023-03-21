import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { homeCarouselData } from '../../../data/HomeCarouselData'
import { HomeCarouselItem } from './HomeCarouselItem'
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';

export const HomeCarousel = () => {

  const data = homeCarouselData
  const [carouselIndex, setCarouselIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)

  useEffect(() => {
    let timer:NodeJS.Timer;
    if (isPlaying) {
      timer = setInterval(() => {
        if (carouselIndex < 3) setCarouselIndex(carouselIndex+1)
        else setCarouselIndex(0)
        }, 10000)
    }
    return () => clearInterval(timer)
  }, [carouselIndex, isPlaying])
  

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
              bgcolor: index === carouselIndex ? 'primary.main' : homeCarouselData[carouselIndex].bg === 'light' ? 'black' : 'white',
              cursor: 'pointer'
            }}
            m={1}
            onClick={() => setCarouselIndex(index)}
          />
        ))}
      </Box>
      <Box position={'absolute'} zIndex={999} sx={{right:'10px', bottom:'10px'}} onClick={() => setIsPlaying(!isPlaying)}>
            <PlayCircleOutlineRoundedIcon fontSize='large' sx={{color:'white'}}/>
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

import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/images/fender_logo_lq.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Searchbar } from './Searchbar';

export const Navbar = () => {

  const topLinks = [
    'fender.com',
    'play',
    'tune',
    'beginners'
  ]

  return (
    <AppBar position="static" elevation={0}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }} ml={1.5}>
          {topLinks.map((el, index) => (
            <Box key={index} mr={3}>
              <Box sx={{ background: 'red', height: '3px' }} />
              <Typography color={'text.secondary'} mt={1} sx={{ fontSize: '10px', fontWeight: 400 }}>{el.toUpperCase()}</Typography>
            </Box>
          ))}
        </Box>
        <Box mt={1} mr={6} display={'flex'} alignItems={'center'}>
          <AccountCircleRoundedIcon fontSize='small' sx={{color:'primary.main'}}/>
          <Typography ml={1} sx={{ fontSize: '.5rem', fontWeight: 600, color:'primary.main' }}>SE CONNECTER</Typography>
        </Box>
      </Box>

      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box>
            <MenuRoundedIcon sx={{color:'text.secondary', marginRight:'20px'}}/>
            <Box component={'img'} src={logo} width={'80px'} />
          </Box>
          <Searchbar />
          <Box>
            <ShoppingCartOutlinedIcon />
            <LocationOnOutlinedIcon />
          </Box>
        </Toolbar>
      </Container>

      <Box sx={{backgroundColor:'black'}} p={1}>
        <Typography textAlign={'center'} fontSize={'.6rem'}>
          <b><u>Livraison gratuite</u></b> à partir de 50€ d'achat
          </Typography>
      </Box>

    </AppBar>
  )
}

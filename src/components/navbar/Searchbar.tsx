import { IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const Searchbar = () => {
    return (
        <Paper
            elevation={0}
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                maxWidth: 500,
                borderRadius: '100px',
                border: 'solid 1px',
                borderColor: 'text.secondary'
            }}
        >
            <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
                <SearchIcon fontSize='small' sx={{color:'#ccc'}}/>
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Fender.com"
                inputProps={{ 'aria-label': 'search google maps' }}
            />

        </Paper>
    )
}

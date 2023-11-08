import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import VideoCard from './videoCard';

const videoGallery  = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      

    return(
        <>
        <h1 className='text-center mb-10'>Video Gallery</h1>
 
        <VideoCard/>
   
        </>
    )

}

export default videoGallery;
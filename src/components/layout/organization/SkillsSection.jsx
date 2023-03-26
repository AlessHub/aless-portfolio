import { Typography } from '@mui/material'
import React from 'react'
import Slider from '../navigation/Slider/Slider';

const SkillsSection = () => {
  return (
    <>
    <Typography variant="h3"
            sx={{ fontWeight:300, mb:3, textAlign:'center', mt:5}}>
        Tech Stack
    </Typography>
    <Slider/>
    </>
  )
}

export default SkillsSection
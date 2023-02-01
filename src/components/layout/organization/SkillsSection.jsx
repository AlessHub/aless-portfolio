import { Typography } from '@mui/material'
import React from 'react'
import Slider from '../navigation/Slider/Slider';

const SkillsSection = () => {
  return (
    <>
    <Typography variant="h3"
            sx={{ mb:5, textAlign:'center', mt:5}}>
        What can I do?
    </Typography>
    <Slider/>
    </>
  )
}

export default SkillsSection
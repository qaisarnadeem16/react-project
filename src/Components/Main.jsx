
import { Box } from '@mui/material'
import React from 'react'
import Posts from './Posts'
import imag1 from '../assets/1.png'
import img1 from '../assets/1 (1).jpg'
import img2 from '../assets/1 (2).jpg'
import img3 from '../assets/1 (3).jpg'
import img4 from '../assets/1 (4).jpg'
const Main = () => {
  return (
    <Box flex={4} p={2} >
      <Posts title='John singh' time='12:00 12 Jan 2023' text='  This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.' image={imag1}/>
           <Posts title='Ahmad' time='12:00 12 Jan 2023' text='  This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.' image={img1}/>
           <Posts title='Zain' time='12:00 12 Jan 2023' text='  This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.' image={img2}/>
           <Posts title='Khalid' time='12:00 12 Jan 2023' text='  This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.' image={img3}/>
           <Posts title='Atif' time='12:00 12 Jan 2023' text='  This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.' image={img4}/>



    </Box>
  )
}

export default Main


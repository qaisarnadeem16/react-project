
import { createTheme, ThemeProvider } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useState } from 'react';
import './App.css';
import Add from './Components/Add';
import Main from './Components/Main';
import Navbar from './Components/Navbar'
import RightBar from './Components/RightBar';
import SideBar from './Components/SideBar';

function App() {
  const [mode , setMode] =useState('light');

  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <>
    <ThemeProvider theme={darkTheme} >
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar/>
     <Stack direction="row " spacing={2} justifyContent='space-between'>
     <SideBar setMode={setMode} mode={mode}/>
     <Main/>
     <RightBar/>
     </Stack>
     <Add/>
  

    </Box>
    </ThemeProvider>
   
    </>
 
  )
}

export default App;

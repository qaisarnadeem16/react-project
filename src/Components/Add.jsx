import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import prof from '../assets/rev2.jpg'

const StyleModal=styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})
const UserBox=styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginLeft:'10px',
    gap: 5
})
const TextBox=styled(Box)({
 
    margin:'10px',
   
})
const Add = () => {
    const [open, setOpen]=useState(false)
  
  return (
    <>
    <Tooltip onClick={e=>setOpen(true)}
     title="Add Post" sx={{position:"fixed", bottom:20 , left:20}}>
    <Fab color="primary" aria-label="add">
  <AddIcon/>
</Fab>
  
</Tooltip>

<StyleModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Box sx={{width: 400 , height:320 , borderRadius:5}}  bgcolor={"background.default"} color={"text.primary"}>
   
<Typography variant='h6' fontWeight={300} mt={2} mb={2} textAlign='center'>Create Post</Typography>
<UserBox>
    <Avatar src={prof} alt='d'/>
    
<Typography variant='span' fontWeight={500} ms={2} >Khalid </Typography>
</UserBox>

<TextBox>
<TextField placeholder='What`s is in your mind' multiline rows={3} variant="standard"  sx={{width:'100%'}} mt={5}/>
<Stack direction='row' gap={1} mt={2} mb={3}>
   <EmojiEmotions color='primary'/>
   <Image color='secondary'/>
   <VideoCameraBack color='success'/>
   <PersonAdd color='error'/>
</Stack>
<ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
  <Button>Post</Button>
  <Button sx={{width:'100px'}}><DateRange/></Button>
</ButtonGroup>
</TextBox>
  </Box>
</StyleModal>
    </>
  )
}

export default Add


import { AccountCircle, Article, DarkMode, Home, PeopleAlt, PersonAdd, Settings, Storefront } from '@mui/icons-material'
import { List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SideBar = ({setMode ,mode}) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <Box flex={1} bgcolor="" p={2} sx={{display: {xs:"none" , sm:"block"}}}>
      <Box position="fixed">
            <List>
        <ListItemButton component="a" href='#Home'>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
             <ListItemText primary="Home" />
           </ListItemButton>
        <ListItemButton >
          <ListItemIcon>
            <Article />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton >
          <ListItemIcon>
            <PeopleAlt />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton><ListItemButton >
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton><ListItemButton >
          <ListItemIcon>
            <PersonAdd/>
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton >
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>
        <ListItemButton >
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>

        <ListItemButton >
          <ListItemIcon>
            <DarkMode />
          </ListItemIcon>
          <Switch onChange={e=>setMode(mode==="light"? "dark":"light")} />
        </ListItemButton>
      </List>
    </Box>
    </Box>
  )
}

export default SideBar

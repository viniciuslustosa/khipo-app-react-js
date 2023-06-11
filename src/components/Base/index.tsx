import React from 'react';
import NavBar from '../NavBar';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';

interface Props {
    children: any,
    signed: boolean,
}

const drawerWidth = 240;

const Base: React.FC<Props> = ({ children, signed }) => {
  return (
    <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
        <NavBar />
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
          { signed && (<Drawer
              sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                      width: drawerWidth,
                      boxSizing: 'border-box',
                      backgroundColor: '#DEE5EE',
                      border: 'none',
                  zIndex: 0
              },
          }}
          variant="permanent"
          anchor="left"
          >
              <Toolbar />
              <Divider />
              <List sx={{ display: 'flex', flexDirection: 'column', gap: '15px', margin: '15px 0', padding: '20px' }}>
              {['Link', 'Link', 'Link', 'Link', 'Link'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                      <ListItemButton sx={{ borderRadius: '10px', backgroundColor: '#EDF1F6' }}>
                          <ListItemIcon>
                              <GridViewIcon />
                          </ListItemIcon>
                          <ListItemText primary={text} />
                      </ListItemButton>
                  </ListItem>
              ))}
              </List>
          </Drawer>) }
          <Box
              component="main"
              sx={{ paddingLeft: signed ? '240px' : '0px', margin: '40px', height: '100%' }}
          >
            {children}
          </Box>
        </Box>
    </div>
  );
}

export default Base;

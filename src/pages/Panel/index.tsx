import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import GridViewIcon from '@mui/icons-material/GridView';
import { Container } from '@mui/material';
import NavBar from '../../components/NavBar';

const drawerWidth = 240;

const Panel: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Drawer
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
            </Drawer>
            <Box
                component="main"
            >
            </Box>
        </Box>
    );
}

export default Panel;

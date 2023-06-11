import * as React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Box, Container, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const Panel: React.FC = () => {
    const { user } = useAuth();    
    const cards = [
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
        }
    ]
    return (
        <React.Fragment>
            <Box component="span" sx={{ justifyContent: 'flex-start'}}>
                <span style={{ fontSize: 20 }}>Welcome, <strong>{ user?.firstName } { user?.lastName }!</strong></span>
            </Box>
            <Box sx={{
                width: '100%',
                backgroundColor: 'white',
                boxSizing: 'border-box',
                margin: '20px 0',
                padding: '20px',
                borderRadius: '10px',
            }}>
                <Grid container>
                    <Grid xs={12}>
                        <Box sx={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            margin: '10px 0' }}>
                            <span style={{ fontSize: '26px' }}>
                                This is the headline
                            </span>
                        </Box>
                    </Grid>
                    <Grid xs={12}>
                        <Box sx={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: '#5C6474',
                            padding: '0 80px',
                            margin: '10px 0' }}>
                            <span>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            </span>
                        </Box>
                    </Grid>
                    { cards.map((card) => (
                        <Grid xs={6}>
                            <Box sx={{
                            justifyContent: 'center',
                            textAlign: 'left',
                            color: '#5C6474',
                            padding: '0 20px',
                            display: 'flex',
                            gap: '10px',
                            margin: '10px 0' }}>
                                <div>
                                    <CheckIcon color='success'></CheckIcon>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <span>
                                        <strong> { card.title } </strong>
                                    </span>
                                    <span>
                                        { card.description }
                                    </span>
                                </div>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default Panel;

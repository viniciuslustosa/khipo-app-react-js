import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { Button, Card, CardContent,  } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Input from '../../components/Input';
import CheckboxInput from '../../components/Checkbox';

function Register() {
    const navigate = useNavigate()
    const { Login, signed, user } = useAuth();
    const [status, setStatus] = useState<string>();
    const [loading, setLoading] = useState<boolean>();

    useEffect(() => {
        if(signed && user) {
            //navigate('/dashboard')
        }
    }, [signed, user])

    const handleLogin = async (email: string, password: string) => {
        setLoading(true);
        try {
            await Login({ email, password });
        } catch (error) {
            setStatus('Login ou senha incorretos')
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="content">
            <div>
                <span className="contentName">
                    Sign Up
                </span>
            </div>
            <Card sx={{ maxWidth: 450, boxShadow: 'none' }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            <Input label="First Name" type="text" required></Input>
                        </Grid>
                        <Grid xs={6}>
                            <Input label="Last Name" type="text"></Input>
                        </Grid>
                        <Grid xs={12}>
                            <Input label="Email address" type="email" required></Input>
                        </Grid>
                        <Grid xs={12}>
                            <Input label="Password" type="password" required></Input>
                        </Grid>
                        <Grid xs={12}>
                            <Button sx={{ width: '100%', fontSize: '12px' }} variant="contained">Sign Up</Button>
                        </Grid>
                        <Grid xs={12}>
                            <span>
                                Already a user? <a href="/signin">Login</a>
                            </span>
                        </Grid>
                    </Grid>

                    
                </CardContent>
            </Card>
        </div>
    );
}

export default Register;

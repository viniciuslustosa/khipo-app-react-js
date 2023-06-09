import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './style.css';
import { Button, Card, CardContent, Paper, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Input from '../../components/Input';
import CheckboxInput from '../../components/Checkbox';

function Login() {
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
                    Sign In
                </span>
            </div>
            <Card sx={{ maxWidth: 460, boxShadow: 'none' }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid xs={12}>
                            <Input label="Email address" type="email"></Input>
                        </Grid>
                        <Grid xs={12}>
                            <Input label="Password" type="password"></Input>
                        </Grid>
                        <Grid xs={6}>
                            <CheckboxInput label="Remember me"></CheckboxInput>
                        </Grid>
                        <Grid xs={6}>
                            <Button variant="text">Forgot password?</Button>
                        </Grid>
                        <Grid xs={12}>
                            <Button sx={{ width: '100%', fontSize: '12px' }} variant="contained">Sign in</Button>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </div>
    );
}

export default Login;

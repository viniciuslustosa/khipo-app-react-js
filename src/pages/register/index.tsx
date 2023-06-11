import React, { FormEvent, useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { Box, Button, Card, CardContent,  } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Input from '../../components/Input';
import { User } from '../../@types/user';

interface FormProps {
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
}

function Register() {
    const navigate = useNavigate()
    const { Register, signed, user } = useAuth();
    const [status, setStatus] = useState<string>();
    const [loading, setLoading] = useState<boolean>();
    const [form, setForm] = useState<FormProps>()

    useEffect(() => {
        if(signed && user) {
            //navigate('/dashboard')
        }
    }, [signed, user])

    const handleRegister = async (event: FormEvent) => {
        setLoading(true);
        try {
            event.preventDefault()
            await Register({
                firstName: form?.firstName,
                lastName: form?.lastName,
                email: form?.email,
                password: form?.password
            })

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
            <Card sx={{ maxWidth: 400, boxShadow: 'none' }}>
                <CardContent>
                    <form onSubmit={(e) => handleRegister(e)}>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <Input
                                    label="First Name"
                                    type="text"
                                    value={form?.firstName}
                                    onChange={(e) => {
                                        setForm(formData => ({
                                            ...formData,
                                            firstName: e.target.value
                                        }));
                                    }}
                                    required></Input>
                            </Grid>
                            <Grid xs={6}>
                                <Input
                                    label="Last Name"
                                    value={form?.lastName}
                                    onChange={(e) => {
                                        setForm(formData => ({
                                            ...formData,
                                            lastName: e.target.value
                                        }));
                                    }}
                                    type="text"></Input>
                            </Grid>
                            <Grid xs={12}>
                                <Input
                                    label="Email address"
                                    type="email"
                                    value={form?.email}
                                    onChange={(e) => {
                                        setForm(formData => ({
                                            ...formData,
                                            email: e.target.value
                                        }));
                                    }}
                                    required></Input>
                            </Grid>
                            <Grid xs={12}>
                                <Input
                                    label="Password"
                                    type="password"
                                    value={form?.password}
                                    onChange={(e) => {
                                        setForm(formData => ({
                                            ...formData,
                                            password: e.target.value
                                        }));
                                    }}
                                    required></Input>
                            </Grid>
                            <Grid xs={12}>
                                <Button sx={{ width: '100%', fontSize: '12px' }} type="submit" variant="contained">Sign Up</Button>
                            </Grid>
                            <Grid xs={12}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <span>
                                        Already a user? <a href="/auth/signin">Login</a>
                                    </span>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>

                    
                </CardContent>
            </Card>
        </div>
    );
}

export default Register;

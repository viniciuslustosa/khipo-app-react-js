import { FormEvent, useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { Box, Button, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Input from '../../components/Input';
import CheckboxInput from '../../components/Checkbox';

interface FormProps {
    email?: string,
    password?: string,
}

function Login() {
    const navigate = useNavigate()
    const { Login, signed, user } = useAuth();
    const [status, setStatus] = useState<string>();
    const [loading, setLoading] = useState<boolean>();
    const [form, setForm] = useState<FormProps>()


    useEffect(() => {
        if(signed && user) {
            //navigate('/dashboard')
        }
    }, [signed, user])

    const handleLogin = async (event: FormEvent) => {
        setLoading(true);
        try {
            event.preventDefault()
            await Login({ email: form?.email, password: form?.password});
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
            <Card sx={{ maxWidth: 400, boxShadow: 'none' }}>
                <CardContent>
                    <form onSubmit={(e) => handleLogin(e)}>
                        <Grid container spacing={2}>
                            <Grid xs={12}>
                                <Input
                                    label="Email address"
                                    value={form?.email}
                                    onChange={(e) => {
                                        setForm(formData => ({
                                            ...formData,
                                            email: e.target.value
                                        }));
                                    }}
                                    type="email"
                                    required></Input>
                            </Grid>
                            <Grid xs={12}>
                                <Input
                                    label="Password"
                                    value={form?.password}
                                    onChange={(e) => {
                                        setForm(formData => ({
                                            ...formData,
                                            password: e.target.value
                                        }));
                                    }}
                                    type="password"
                                    required></Input>
                            </Grid>
                            <Grid xs={6}>
                                <CheckboxInput label="Remember me"></CheckboxInput>
                            </Grid>
                            <Grid xs={6}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                                    <Button sx={{ padding: 2, fontSize: 12 }} variant="text">Forgot password?</Button>
                                </Box>
                            </Grid>
                            <Grid xs={12}>
                                <Button sx={{ width: '100%', fontSize: '12px' }} type="submit" variant="contained">Sign in</Button>
                            </Grid>
                        </Grid>
                    </form>

                </CardContent>
            </Card>
        </div>
    );
}

export default Login;

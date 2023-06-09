import { FormControl, InputBase, InputLabel, alpha, styled } from '@mui/material';
import React from 'react';
import './style.css';

interface InputProps {
    label?: string,
    type?: string,
    required?: boolean,
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E6ECF2' : '#2D3843',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: 'Inter',
      color: '#000',
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  

const Input: React.FC<InputProps> = ({ label, type, required }) => {
  return (
    <div className="contentInput">
        <FormControl sx={{ width: '100%' }} variant="standard">
            <InputLabel required={required} shrink htmlFor="bootstrap-input">
            { label ?? 'label' }
            </InputLabel>
            <BootstrapInput type={type} id="bootstrap-input" />
        </FormControl>
    </div>
  );
}

export default Input;

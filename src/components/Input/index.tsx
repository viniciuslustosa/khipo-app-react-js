import { FormControl, InputBase, InputLabel, alpha, styled } from '@mui/material';
import React, { ChangeEvent } from 'react';
import './style.css';

interface InputProps {
    value?: any,
    label?: string,
    type?: string,
    required?: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
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
  

const Input: React.FC<InputProps> = ({ onChange, value, label, type, required }) => {
  return (
    <div className="contentInput">
        <FormControl sx={{ width: '100%' }} variant="standard">
            <InputLabel sx={{ color: 'black', fontSize: 20, fontWeight: 'bold' }} required={required} shrink htmlFor="bootstrap-input">
            { label ?? 'label' }
            </InputLabel>
            <BootstrapInput value={value} onChange={(e) => onChange(e)} type={type} required={required} />
        </FormControl>
    </div>
  );
}

export default Input;

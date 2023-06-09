import { Checkbox, FormControlLabel,} from '@mui/material';
import React from 'react';
import './style.css';

interface InputProps {
    label?: string,
    type?: string,
}

const CheckboxInput: React.FC<InputProps> = ({ label, type }) => {
  return (
    <div className="contentInput">
        <FormControlLabel control={<Checkbox defaultChecked />} label={label} />
    </div>
  );
}

export default CheckboxInput;

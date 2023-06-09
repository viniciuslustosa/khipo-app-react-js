import React from 'react';
import NavBar from '../NavBar';

interface Props {
    children: any
}

const Base: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
        <NavBar />
        {children}
    </div>
  );
}

export default Base;

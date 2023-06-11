import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex',
      position: 'absolute',
      width: '100%',
      height: '100%',
      color: 'white',
      fontSize: '100px',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
        <span style={{ color: '#3A8EDD' }}><strong>404 :(</strong></span>
    </div>
  );
}

export default NotFound;

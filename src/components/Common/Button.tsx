// RegisterButton.js
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button:React.FC<ButtonProps> = ({ children,onClick }) => {

    const buttonStyle = {
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    };

    return <button onClick={onClick} style={buttonStyle}>{children}</button>;
};

export default Button;
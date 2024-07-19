// RegisterButton.js
import React from 'react';
import '../../styles/sidebar.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {

    const buttonStyle = {
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        padding: '10px',
        backgroundColor: "transparent",
        fontSize: "12px",
    };

    return <div onClick={onClick} style={buttonStyle}>{children}</div>;
};

export default Button;
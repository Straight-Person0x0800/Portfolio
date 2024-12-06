import React from 'react';

const Button = ({ type = 'button', onClick, children, className = '', disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={/*disabled*/0}
            className={`w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 ${
                disabled ? 'opacity-50 cursor-not-allowed' : ''
            } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;

import React from 'react';
import { Link } from 'react-router-dom';

const LinkText = ({ text, linkText, to, className = '', linkClassName = '' }) => {
    return (
        <p className={`text-sm text-center ${className}`}>
            {text}{' '}
            <Link to={to} className={`font-medium hover:underline ${linkClassName}`}>
                {linkText}
            </Link>
        </p>
    );
};

export default LinkText;

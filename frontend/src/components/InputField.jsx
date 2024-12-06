import React from 'react';

const InputField = ({ label, id, name,placeHolder='', type = 'text', value, onChange, required = true }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeHolder}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                required={required}
            />
        </div>
    );
};

export default InputField;

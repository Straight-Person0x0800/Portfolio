import React from 'react';

const InputSection = ({
                          label,
                          type,
                          options = [],
                          placeholder,
                          value,
                          onChange,
                          accept,
                      }) => {
    return (
        <div className="w-full space-y-2">
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>

            {/* Types d'inputs */}
            {type === 'color' && (
                <div className="flex space-x-4">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => onChange(option)}
                            className={`w-12 h-12 rounded-full cursor-pointer border-2 ${
                                value === option ? 'border-black' : 'border-gray-300'
                            }`}
                            style={{ backgroundColor: option }}
                        ></div>
                    ))}
                </div>
            )}

            {type === 'text' && (
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                />
            )}

            {type === 'file' && (
                <input
                    type="file"
                    accept={accept}
                    onChange={(e) => onChange(e.target.files[0])}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none"
                />
            )}

            {type === 'textarea' && (
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                    rows={4}
                />
            )}
        </div>
    );
};

export default InputSection;

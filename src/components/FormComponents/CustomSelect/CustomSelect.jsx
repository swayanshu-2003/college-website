// SelectInput.jsx
import React from 'react';
import { useFormContext } from 'react-hook-form';

const CustomSelect = ({ options, placeholder, label, name, className = '', required, ...rest }) => {
    const { register, setValue, getValues } = useFormContext();

    return (
        <div className={`w-full ${className} flex flex-col`}>
            {label && <label htmlFor={name} className='ml-1'>{label}</label>}
            <div className={`relative w-full mt-1`}>
                <select
                    onChange={(e) => setValue(name, e.target.value)}
                    {...register(name, { required })}
                    {...rest}
                    className={`rounded-lg block appearance-none w-full bg-white border-2 border-gray-200 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-gray-300`}
                >
                    {placeholder && (
                        <option value="" disabled selected>
                            {placeholder}
                        </option>
                    )}
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                        className="fill-current w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default CustomSelect;

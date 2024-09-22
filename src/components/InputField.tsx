import React from 'react';

import inputFiled from '../css/inputFiled.module.css';


interface InputFieldProps {
    label: string;
    type: string;
    value: string | number;
    isRequired: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    options?: Array<{ value: string | number; label: string }>;
    className: string;

}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, isRequired, options, className, onChange }) => {


    return (
        <div className={`${inputFiled.inputContainer} `} >

            <label className={isRequired ? inputFiled.asterisk_input : inputFiled.lable_location}>
                {label}
            </label>

            {type === "select" && options ? (
                <select
                    className={`${inputFiled.asterisk_input} ${className}`}
                    required={isRequired}
                    value={value}
                    onChange={onChange}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    className={className}
                    required={isRequired}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            )}



        </div>

    );
};

export default InputField;

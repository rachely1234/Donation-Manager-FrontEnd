import React, { useState } from 'react';

import inputFiled from '../css/inputFiled.module.css';
import { Input } from '@mui/icons-material';


interface InputFieldProps {
    label: string;
    type: string;
    value: string | number;
    isRequired: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    options?: Array<{ value: string | number; label: string }>;
    className: string;
    entityName: string;

}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, isRequired, options, className, entityName, onChange }) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);


    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (!e.target.value) {
            setIsFocused(false);
        }
    };
    const getLabelClass = () => (isFocused || value ? inputFiled.activeLabel : '');

    return (
        <div className={`${inputFiled.wrapperInput} ${className} ${isRequired ? inputFiled.isRequired : ''} ${inputFiled.item}`} >


            {type === "select" && options ? (
                <select
                    required={isRequired}
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    name={entityName}

                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    className={` ${className} ${inputFiled.inputField}`}
                    required={isRequired}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    name={entityName}
                />
            )}
            


            <label
                className={`${getLabelClass()}  ${isRequired ? inputFiled.asteriskInput : inputFiled.labelLocation}`}
                htmlFor={entityName}
            >
                {label}
            </label>

        </div>

    );
};

export default InputField;

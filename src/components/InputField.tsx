import React from 'react';

import inputFiled from '../css/inputFiled.module.css';


interface InputFieldProps {
  label: string;
  type: string;
  value: string | number;
  isRequired:boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   
  
}

const InputField: React.FC<InputFieldProps> = ({ label, type, value,isRequired, onChange }) => {
  return (
    <div className={inputFiled.inputContainer}>
        <div className={inputFiled.title}></div>

      {isRequired?<label className={`${inputFiled.asterisk_input} ${inputFiled.lable_location}`}>{label}</label>:<label className={inputFiled.lable_location}>{label}</label>}
      <input className={inputFiled.asterisk_input}  required={isRequired} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;

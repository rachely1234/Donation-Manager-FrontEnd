import React from 'react';

import button from '../css/button.module.css'

interface InputFieldProps {
  
    typeButton: 'submit' | 'reset' | 'button';
    value: string ;
    hasBackground?:boolean;

   
  
}

const Button: React.FC<InputFieldProps> = ({ typeButton, value,hasBackground}) => {
  return (
<>
    {hasBackground?
    <button  className={ `${button.hasBackground } ${button.button_template}`}type={typeButton} >{value}</button>:
    <button className={`${button.withoutBackground} ${button.button_template}`}type={typeButton}>{value}</button>
    }
</>

  );
};

export default Button;

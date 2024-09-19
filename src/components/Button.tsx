import React from 'react';

import button from '../css/button.module.css'

interface InputFieldProps {
  
    typeButton: 'submit' | 'reset' | 'button';
    value: string ;
    hasBackground?:boolean;
  
  
     onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; 

    
    

   
  
}

const Button: React.FC<InputFieldProps> = ({ typeButton, value,hasBackground,onClick }) => {
  return (
<>
    {hasBackground?
    <button onClick={onClick} className={ `${button.hasBackground } ${button.button_template}`}type={typeButton} >{value}</button>:
    <button className={`${button.withoutBackground} ${button.button_template}`}type={typeButton}>{value}</button>
    }
</>

  );
};

export default Button;

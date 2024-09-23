import React from 'react';

import button from '../css/button.module.css'

interface ButtonProps {
  
    typeButton: 'submit' | 'reset' | 'button';
    value: string ;
    hasBackground?:boolean;
  
     onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; 

}

const Button: React.FC<ButtonProps> = ({ typeButton, value, hasBackground = true, onClick }) => {
  const buttonClass = `${button.button_template} ${hasBackground ? button.hasBackground : button.withoutBackground}`;

  return (
    
      <button onClick={onClick} className={buttonClass} type={typeButton}>
        {value}
      </button>
    
    
  );
};

export default Button;

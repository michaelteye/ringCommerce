import React from 'react';
import { ReactNode } from 'react';
import ReactLoading from 'react-loading';

interface ButtonProps {
  children: ReactNode;
  loading: string | any;
  disabled: string | boolean;
  onClick: () => void;
}

const Button = ({ children, loading, disabled, onClick }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="md:mt-[20px] bg-[#462416] text-white md:py-4 justify-center md:px-[150px] my-2 md:text-left md:w-[51%] w-[112%] py-4  md:mr-0"
      disabled = {disabled || loading }
      onClick={onClick}
    >
      { loading ? (
      < ReactLoading type='balls' height={'20%'} width={'20%'} color='#ffffff'/>
      ):(
        children // Render the button label otherwise 
      ) 
      }
    </button>
  );
};

export default Button;

import login from '../../../assets/images/login.png';
import { Link } from 'react-router-dom';
import SvgGoogle from '../../icons/google';
import React, { useState } from 'react';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import Button from '../../Button';
import ReactLoading from 'react-loading';
import { LoginSchema } from '../../../Utils/validationSchemas';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

interface loginProps {
  email: string;
  password: string;
}
export const Login = () => {
  const [input, setIput] = useState({
    email: '',
    password: '',
  });
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState<{ [key: string]: string }>({});
  const auth = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIput(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     console.log('there is a mistake');
  //     if (!input.email.includes('@')) {
  //       setError({ email:'Email should contain @ symbol' });
  //     } else {
  //       setError({ ...errors, email: '' });
  //       document.getElementById('password')?.focus();
  //     }
  //   }
  // };
  const handleEmailBlur = () => {
    if (!input.email.includes('@')) {
      setError({ email: 'Email should contain @ symbol' });
    } else {
      setError({ ...errors, email: '' });
    }
  };

  const handlePassword = ()=>{
    if(input.password.length < 5){
      setError({password:'Password should be more than 5 characters'})
    }
    else{
      setError({...errors, password:''})
    }
  }
  const handleSubmitEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.email && input.password) {
      try {
        await LoginSchema.validate(input, { abortEarly: false });
        setLoading(true);
        console.log('this is the token from auth >>>', auth.access_token);
        await auth.loginAction(input);
        setLoading(false);
        await navigate('/shop');
        console.log('the navigation is successful');
      } catch (validationErrors: yup.ValidationError | any) {
        if (validationErrors instanceof yup.ValidationError) {
          const formattedErrors: { [key: string]: string } = {};
          validationErrors.inner.forEach(error => {
            formattedErrors[errors.path] = error.message;
          });
          setError(formattedErrors);
        } else {
          console.error(validationErrors); // Handle other errors
        }
      }
    } else {
      alert('provide the information for the required fields');
      setError(errors);
    }
  };
  return (
    <div className="flex md:justify-center md:text-center md:pl-[210px]">
      <div className="hidden md:block justify-end text-right  w-[45%] ml-10 mt-10 mb-5">
        <img
          src={login}
          className="justify-end text-right object-cover w-[95%]"
          alt=""
        />
      </div>
      <div className="md:text-left md:justify-center md:w-[60%] md:pt-[40px] md:ml-0 ml-4">
        <h2 className="leading-10 text-3xl font-normal pb-2 font-clash-display ">
          Login
        </h2>
        <form onSubmit={handleSubmitEvent}>
          <label htmlFor="" className="md:pr-[30%]">
            email
          </label>
          <br />
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            placeholder="demo@gmail.com"
            className="border-2 md:w-[50%] w-[110%] border-zinc-950 py-2 px-2 mb-"
            onBlur={handleEmailBlur}
          />
          { errors.email && <p className='text-red-400'>{errors.email}</p>}

          <br />

          <br />
          <label htmlFor="" className="md:pr-[30%]">
            password
          </label>
          <br />
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            placeholder="******"
            className="border-2 md:w-[50%] w-[110%] border-zinc-950 py-2 px-2 mb-2"
            onBlur={handlePassword}
          />
          {errors.password && <p className='text-red-500'>{errors.password}</p>}
          <br />
          <Link className=" pl-[200px]" to="">
            Forgot Password?
          </Link>
          <div className="mr-2">
            {/* <button 
              type="submit"
              className="md:mt-[20px] bg-[#462416] text-white md:py-4 justify-center md:px-[150px] my-2 md:text-left md:w-[51%] w-[112%] py-4  md:mr-0">
              Login 
            </button> */}
            <Button disabled={loading} onClick={handleSubmitEvent}>
              {loading ? (
                <ReactLoading type="balls" height={'20%'} width={'20%'} />
              ) : (
                'Login'
              )}
            </Button>
            {auth.error && (
              <p className="text-red-500 text-lg ">
                check email or password again
              </p>
            )}

            <button className="flex md:mt-[1px] text-[#462416] border-[#462416] justify-center border-2 md:py-4 md:px-[70px] my-2 md:text-left md:w-[51%] w-[112%] py-4  md:mr-0">
              <span>
                <SvgGoogle />
              </span>
              <span>Continue with Google</span>
            </button>
          </div>
          <div className="flex text-center pl-10">
            <p className="pl-5">Already have an account?</p>
            <Link to="">Login</Link>
          </div>
        </form>
      </div>

    </div>
  );
};

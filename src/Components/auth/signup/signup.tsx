import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import signup1 from '../../../assets/images/signup.png';
import SvgGoogle from '../../icons/google';
import { SignUp } from '../../../Hooks/register';


export const RegisterUser = () => {
const {handleRegistration} = SignUp()

  const { handleSubmit, register } = useForm();
  

  return (
    <div className="flex justify-center text-center pl-[210px]">
      <div className="hidden md:block justify-end text-right  w-[45%] ml-10 mt-10 mb-5">
        <img
          src={signup1}
          className="justify-end text-right object-cover w-[95%]"
          alt=""
        />
      </div>
      <div className="md:text-left md:justify-center md:w-[60%] md:pt-[40px] md:ml-0 ml-4">
        <h2 className="leading-10 text-3xl font-normal pb-4 font-clash-display ">
          Create Account
        </h2>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <label htmlFor="" className="md:pr-[30%]">
            First Name
          </label>
          <br />
          <input
            type="firstName"
            placeholder="Mercy Amposah"
            className="border-2 md:w-[50%] w-[110%] border-zinc-950 py-2 px-2 mb-2"
            {...register("firstName")}
          />
          <br />
          <label htmlFor="" className="md:pr-[30%]">
            Last Name
          </label>
          <br />
          <input
            type="text"
            placeholder="Mercy Amposah"
            className="border-2 md:w-[50%] w-[110%] border-zinc-950 py-2 px-2 mb-2"
            {...register("lastName")}
          />

          <br />
          <label htmlFor="" className="md:pr-[30%]">
            Email
          </label>
          <br />
          <input
            type="Email"
            placeholder="demo@gmail.com"
            className="border-2 md:w-[50%] w-[110%] border-zinc-950 py-2 px-2 mb-2"
            {...register("email")}
          />

          <br />
          <label htmlFor="" className="md:pr-[30%]">
            password
          </label>
          <br />
          <input
            type="password"
            placeholder="******"
            className="border-2 md:w-[50%] w-[110%] border-zinc-950 py-2 px-2 mb-4"
            {...register("password")}
          />


          <div className="mr-2">
            <button
              type="submit"
              className="md:mt-[20px] bg-[#462416] text-white md:py-4 justify-center md:px-[110px] my-2 md:text-left md:w-[51%] w-[112%] py-4  md:mr-0"
            >
              Create Account
            </button>
            <button className="flex md:mt-[1px] text-[#462416] border-[#462416] justify-center border-2 md:py-4 md:px-[70px] my-4 md:text-left md:w-[51%] w-[112%] py-4  md:mr-0">
              <span>
                <SvgGoogle />
              </span>
              <span>Continue with Google</span>
            </button>
          </div>
          <div className="flex text-center pl-10">
            <p className="pl-10 ml-5">Already have an account?</p>
            <Link to="">Login</Link>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

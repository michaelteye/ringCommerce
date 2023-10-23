import login from '../../../assets/images/login.png'
import { Link } from 'react-router-dom'
import SvgGoogle from '../../icons/google'
export const Login=()=>{
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
          <form action="">
            <label htmlFor="" className="md:pr-[30%]">
              email
            </label>
            <br />
            <input
              type="email"
              placeholder="demo@gmail.com"
              className="border-2 md:w-[50%] w-[110%] border-zinc-950 py-2 px-2 mb-"
            />
            <br />
           
            <br />
            <label htmlFor="" className="md:pr-[30%]">
              password
            </label>
            <br />
            <input
              type="password"
              placeholder="******"
              className="border-2 md:w-[50%] w-[110%] border-zinc-950 py-2 px-2 mb-2"
            />
            <br />
            <Link className=' pl-[200px]' to="">
            Forgot Password?
            </Link>
            <div className="mr-2">
              <button className="md:mt-[20px] bg-[#462416] text-white md:py-4 justify-center md:px-[150px] my-2 md:text-left md:w-[51%] w-[112%] py-4  md:mr-0">
                Login
              </button>
              <button className="flex md:mt-[1px] text-[#462416] border-[#462416] justify-center border-2 md:py-4 md:px-[70px] my-2 md:text-left md:w-[51%] w-[112%] py-4  md:mr-0">
                <span><SvgGoogle/></span><span>Continue with Google</span> 
              </button>
            </div>
            <div className='flex text-center pl-10'>
                <p className='pl-5'>Already have an account?</p>
                <Link to="">Login</Link>
            </div>
          </form>
        </div>
       
      </div>
  )
}

import resetPassword from '../../../assets/images/reset.png';
import SvgLeftarrow from '../../icons/leftarrow';

export const ResetUserPassword = () => {
  return (
    <div className="flex md:justify-center md:text-center md:pl-[150px] pb-4">
      <div className="hidden md:block justify-end text-right  w-[40%] ml-10 mt-10 mb-5">
        <img
          src={resetPassword}
          className="justify-end text-right object-cover w-[80%] h-[88%] ml-10"
          alt=""
        />
      </div>
      <div className="md:text-left md:justify-center md:w-[60%] md:pt-[31px] md:ml-0 ml-4">
        <h3 className=" font-clash-display font-medium md:text-[32px] text-[28px] leading-10  md:ml-0">
          Reset Password
        </h3>

        <p className="leading-5 text-base font-normal pb-6  font-archivo md:pr-[200px] py-7">
          This password must be different from your previous passwords
        </p>
        <form action="">
          <label htmlFor="" className="md:pr-[30%]">
            email
          </label>
          <br />
          <input
            type="password"
            placeholder="password"
            className="border-2 md:w-[70%] w-[95%] border-zinc-950 py-2 px-2 mb-"
          />
          <br />
          <label htmlFor="" className="md:pr-[30%]">
            email
          </label>
          <br />
          <input
            type="password"
            placeholder="confirmPassword"
            className="border-2 md:w-[70%] w-[95%] border-zinc-950 py-2 px-2 mb-"
          />
          <br />
          <div className="mr-2">
            <button className="md:mt-[20px] bg-[#462416] text-white md:py-4 justify-center md:px-[120px] my-2 md:text-left md:w-[71%] w-[97%] py-4  md:mr-0">
              Send Link
            </button>
          </div>
          <div className="text-right justify-center pt-10 md:ml-10 md:pl-10 ">
            <button className="flex text-center justify-center md:pl-0 pl-[100px] md:pb-0 pb-10 md:ml-10 md:w-[50%]">
              <span>
                <SvgLeftarrow />
              </span>
              <span>Back to Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

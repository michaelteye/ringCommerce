
import trends from '../../assets/images/trends.png';

export const Trends: React.FC = () => {
  return (
    <>
      <div className="hidden md:flex bg-[#E0A65A] justify-center mt-10 py-10 h-[70vh]">
        <div className="px-10 py-[104px] w-[40%] justify-center ">
          <img src={trends} className='max-w-[100%] ml-10 my-6'  alt="" />
        </div>
        <div className='ml-[70px] py-[50px]'>
          <div className="pt-10 w-[70%] my-6">
            <h3 className="leading-[59.9px] font-clash-display text-[48px] font-medium">
              Stay Ahead of the Trends
            </h3>
            <p className=" font-archivo leading-[27.41px] text-[16px] font-normal  ml-2">
              Stay in the know and be the first to access exciting updates,
              exclusive promotions, and insider discounts! Sign up for our
              newsletter today and unlock a world of benefits tailored just for
              you.
            </p>
            <div className="pt-4 text-cente">
              <input
                type="text"
                placeholder="Enter your Email"
                className="bg-[#E0A65A] border text-left border-[#0E0D0D] text-[#0E0D0D] pl-2 py-3 w-[60%]"
              />
              <button className="bg-[#462416] text-white p-3 ml-2 w-[25%]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import SvgRightarrow from '../icons/rightarrow';
import specialDay from '../../assets/images/specialDay.png'

export const SpecialDay: React.FC = () => {
  return (
    <>
      <div
        className=" h-[80vh] text-center bg-cover bg-specialDay bg-center mx-4"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage:`url(${specialDay})` }}
      >
        <div className="container mx-auto p-4">
          <div className="md:text-center text-left text-white pt-[350px] ">
            <p className="text-white md:text-left text-center font-semibold font-clash-display text-[32px] md:text-[48px] pl-2">
              The Special Day
            </p>
            <p className="md:text-left text-center font-medium text-[16px] leading-[23.41px] md:text-[18px] md:leading-[30.11px] pl-2 pb-2 pt-2">
              Find inspiration to express your love, explore design
              <br />
              option for your handcrafted ring more.
            </p>
            <div className="md:justify-start md:text-left flex pl-[120px] text-center md:pb-8 pt-4 pb-10 md:pl-2">
              <button className="md:bg-[#462416] bg-[#462416] text-white w-auto md:w-[30%]  text-center justify-center px-6 py-4 flex rounded-sm ">
                <span className="pr-2">shop Now</span>
                <SvgRightarrow />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col-reverse">
        <div className=" bg-handicraft w-auto h-[50vh] md:w-[60%] bg-center md:h-[50vh] text-center object-cover md:mx-4 my-10 mx-4" 
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
        </div>
        <div className="md:w-1/2">
          <div className='text-left justify-end pl-2 md:pt-[80px] ml-6'>
            <h3 className=' font-clash-display2 md:text-[40px] text-[24px] '>Handcrafted & Ethically</h3>
            <h3 className='font-clash-display2 md:text-[40px] text-[24px]'>Sourced</h3>
            <p className=' font-archivo leading-[20px] pr-2'>
              We work with expert jewelers who use high-quality and enduring
              materials, from precious metals like recycled and responsibly
              mined gold to ethically sourced diamonds and AAA-grade gemstones
            </p>
          </div>
          <div className='md:block hidden'>
          <button className=' bg-[#462416] text-white w-[30%] p-4 mt-4 ml-8'>
            Learn More
          </button>
          </div>
          
        </div>
      </div>
    </>
  );
};

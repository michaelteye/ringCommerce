import SvgRightarrow from '../icons/rightarrow';
import specialDay from '../../assets/images/specialDay.png';
import SpecialWork from './specialwork';


export const SpecialDay: React.FC = () => {
  return (
    <>
      <div
        className=" h-[80vh] text-center bg-cover bg-specialDay bg-center mx-4"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${specialDay})`,
        }}
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
      <SpecialWork/>
    </>
  );
};

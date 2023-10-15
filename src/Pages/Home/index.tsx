import { Layout } from '../../Components/Layout/Layout';
import SvgRightarrow from '../../Components/icons/rightarrow';
import wedding from '../../assets/images/wedding.png'
import Engagement from '../../assets/images/engagement.png'
import eternal from '../../assets/images/eternal.png'
import bridal from '../../assets/images/bridalset.png'
import { BestSellers } from '../../Components/BestSellers/bestSellers';
import { NewRivals } from '../../Components/NewRivals/new_rivals';
import { SpecialDay } from '../../Components/special/specialDay';
import { Testimoney } from '../../Components/Testimoney/Testimoney';
import { GetInspired } from '../../Components/Inspired/getInspired';
import { Trends } from '../../Components/trends/trends';
import homeImage from '../../assets/images/homeImage.png'






function Home() {
  return (
    <Layout>
      <div className=" w-full pt-[414px]" style={{backgroundImage:`url(${homeImage})`}}>
        <div className="md:text-center text-left text-white">
          <p className="text-white md:text-left text-center font-bold font-clash-display text-[32px] md:text-[72px] pl-2 md:pl-4">
            Captivating Elegance
            <br />
            Tailored to Your
            <br />
            Desires
          </p>
          <p className="md:text-left text-center font-medium text-[16px] leading-[23.41px] md:text-[24px] md:leading-[30.11px] pl-1 pb-2 md:pl-4 pt-2">
            Unleash Your Inner Radiance with
            <br className="md:hidden" />
            Exquisite Rings from our
            <br />
            sparkling collection
          </p>
          <div className='md:justify-start md:text-left flex pl-[120px] text-center md:pb-8 pt-4 pb-10 md:pl-4'>
            <button className="md:bg-[#FAF9E3] bg-white text-black w-auto md:w-[30%]  text-center justify-center px-6 py-4 flex rounded-sm ">
              <span className='pr-2'>
                  shop Now
              </span>
              <SvgRightarrow />
            </button>
          </div>
        </div>
      </div>
      {/* ring components */}
      <div className='md:flex pt-10 pb-4 grid grid-cols-1'>
        <div className=' md:w-[60%] relative'>
        <div className="absolute  bg-[#D9D9D9] opacity-70"></div>
          <img src={wedding} className="object-cover md:w-full md:pr-4 md:pl-8 h-full px-4 pb-2" alt="" />

        </div>
        <div className='relative md:w-[40%] text-[#D9D9D9]'>
        <div className="absolute  bg-[#D9D9D9] opacity-90"></div>
          <img src={Engagement} className="object-cover md:w-full md:pl-2 md:pr-8 h-full pb-2 px-4" alt="" />

        </div>

      </div>
      <div className='md:flex pt-10 pb-4 grid grid-cols-1'>
        <div className=' md:w-[40%]'>
          <img src={eternal} className="object-cover md:w-full md:pr-4 md:pl-8 h-full px-4 pb-2 " alt="" />

        </div>
        <div className='md:w-[60%]'>
          <img src={bridal} className="object-cover md:w-full md:pl-2 md:pr-8 h-full pb-2 px-4" alt="" />

        </div>

      </div>
      <BestSellers/>
      <NewRivals/>
      <SpecialDay/>
      <Testimoney/>
      <GetInspired/>
      <Trends/>
    </Layout>
  );
}

export default Home;


import get1 from '../../assets/images/get1.png'
import get from '../../assets/images/handcraft.png'
import get2 from '../../assets/images/get2.png'
import get3 from '../../assets/images/get3.png'
import { SlideShow } from '../Slide/slide'

export const GetInspired=()=>{
    const slides = [get, get1, get2, get3];
    return (
        <>
         <div className=' justify-center text-center w-auto'>
            <p className='text-[40px] leading-[49.2px] font-clash-display '>Get Inspired</p>
          </div>
          <SlideShow slides={slides} title='' />
         
        </>
      );
}

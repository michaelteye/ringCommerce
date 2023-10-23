import ring1 from '../../assets/images/ring1.png';
import ring2 from '../../assets/images/ring2.png';
import ring3 from '../../assets/images/ring3.png';
import ring4 from '../../assets/images/ring4.png';
import { SlideShow } from '../Slide/slide';


export const NewRivals: React.FC = () => {
  const slides = [ring1, ring2, ring3, ring4];


  return (
    <>
      <SlideShow slides={slides} title='New Rivals' />
      <div className=' justify-center text-center w-auto'>
        <button className='text-[#945121] border h-[10%] w-[10%] my-10 border-[#945121] text-center'>See All</button>
      </div>
    </>
  );
};

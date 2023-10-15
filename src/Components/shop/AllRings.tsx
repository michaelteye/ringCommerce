import SvgFilter from '../icons/filter';
import SvgDownArrow from '../icons/downarrow';
import card1 from '../../assets/images/all1.png';
import card2 from '../../assets/images/all2.png';
import card3 from '../../assets/images/all3.png';
import card4 from '../../assets/images/all4.png';
import SvgFavorite from '../icons/favorite';
import SvgCircle from '../icons/circle';
import shop from '../../assets/images/shop1.jpg'


const AllSet: React.FC = () => {
  const cards = [card1, card2, card3, card4];
  return (
    <>
      <div
        className=" md:h-[80vh] h-[50vh]  text-center bg-cover bg-center"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage:`url(${shop})`}}
      >
        <div className="container mx-auto p-4">
          <div className=" text-left text-white md:pt-[500px] pt-[250px] ">
            <p className="text-[#000000] text-left font-semibold font-clash-display text-[32px] md:text-[48px] pl-2">
              shop
            </p>
          </div>
        </div>
      </div>
      <div className="py-4">
        <ul className="md:flex justify-center grid grid-cols-2 ">
          <li className="mx-4">
            <button className="bg-[#462416] text-white px-8 py-2 mx-2 my-2 w-full">
              All
            </button>
          </li>
          <li className="mx-4">
            <button className="border text-[#462416] border-[#462416] px-8 py-2 mx-2 my-2 w-full">
              wedding
            </button>
          </li>
          <li className="mx-4">
            <button className="border text-[#462416] border-[#462416] px-8 py-2 mx-2 my-2 w-full">
              Engagement
            </button>
          </li>
          <li className="mx-4">
            <button className="border text-[#462416] border-[#462416] px-8 py-2 mx-2 my-2 w-full">
              Eternal
            </button>
          </li>
          <li className="mx-4">
            <button className="border text-[#462416] border-[#462416] px-8 py-2 mx-2 my-2 w-full">
              Bridal Set
            </button>
          </li>
        </ul>
      </div>
      <div className='md:pl-10 pl-2 md:pt-0  justify-start text-left'>
        <p className='pt-2'>All(200)</p>
      </div>
      <div className=" text-right flex justify-end">
        <p className="flex px-4">
          <span>Filter</span>
          <SvgFilter />
          <span></span>
        </p>
        <p className="flex md:pr-10 pr-4">
          <span>Sort By</span>
          <span>
            <SvgDownArrow />
          </span>
        </p>
      </div>
      <div>
      <div>
        <div className="md:flex w-full justify-center grid grid-cols-2">
          {cards.map((card: any, index: number) => (
            <div className="relative mx-2 my-4">
              <img src={card} className="w-auto md:h-[40vh] " alt={`Card ${index}`} />
              <SvgFavorite className="absolute top-2 right-2" />
              <p>Kian Ring</p>
              <p className='flex'><SvgCircle className='w-4 mx-1 my-1'/><SvgCircle className='w-4 text-[#E0A65A] mx-1 my-1'/><SvgCircle className='w-4 text-[#EAEAEA] mx-1 my-1'/></p>
              <p>₵ 2000</p>
            </div>
          ))}
        </div>

        {/* next but same section */}
        <div className="md:flex w-full justify-center grid grid-cols-2">
          {cards.map((card: any, index: number) => (
            <div className="relative mx-2 my-4">
              <img src={card} className="w-auto md:h-[40vh] " alt={`Card ${index}`} />
              <SvgFavorite className="absolute top-2 right-2" />
              <p>Kian Ring</p>
              <p className='flex'><SvgCircle className='w-4 mx-1 my-1'/><SvgCircle className='w-4 text-[#E0A65A] mx-1 my-1'/><SvgCircle className='w-4 text-[#EAEAEA] mx-1 my-1'/></p>
              <p>₵ 2000</p>
            </div>
          ))}
        </div>

      </div>
      </div>
    </>
  );
};

export default AllSet;

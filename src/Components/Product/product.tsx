import { useParams } from 'react-router-dom';
import ring1 from '../../assets/images/ring1.png';
import ring2 from '../../assets/images/ring2.png';
import ring3 from '../../assets/images/ring3.png';
import ring4 from '../../assets/images/ring4.png';
import { useShopSDetails } from '../../Hooks/product/useShop';
import SvgCart from '../icons/cart';
import SvgStar from '../icons/star';
import { SlideShow } from '../Slide/slide';
import ProductDetails from './components/Details';
export default function Product() {
  // const [details, setDetails] = useState<string>()
  const { product_id } = useParams();
  console.log('the product id is given as >>>', product_id);

  const { data: Detail } = useShopSDetails(product_id);
  const slides = [ring1, ring2, ring3, ring4];
  

  
  const sizes = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5];
  return (
    <>
      <div className=" md:flex grid">
        <div className="md:flex md:w-[20%] grid w-full">
          {Detail && (
            <ul className="md:w-[40%] md:ml-0 ml-4 md:flex-col w-[90%] flex">
              {Detail.images.map((image: any, index: any) => (
                <li key={index} className="py-4">
                  <img
                    src={image}
                    className={`md:ml-[150px] w-[90%] md:w-auto pl-1 ${
                      index !== 0 ? 'ml-2' : ''
                    }`}
                    alt=""
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        {Detail && (
          <div key={Detail.key} className="md:w-[40%] md:pl-2 pt-4">
            <img
              src={Detail.images}
              className="px-4 h-[100%] opacity-100 filter brightness-30"
              alt=""
            />
          </div>
        )}

        <div>
          <div>
            <p className="md:pl-10 pl-4 pt-2 font-clash-display font-medium leading-[40px] text-[24px]">
              Plain Shaped Wedding Band
            </p>
            <ul className="flex">
              <li className="md:pl-10 pl-4">
                <SvgStar className="mt-2" />
              </li>
              <li className="pl-1">
                <SvgStar />
              </li>
              <li className="pl-1">
                <SvgStar className="mt-2" />
              </li>
              <li className="pl-1 ">
                <SvgStar />
              </li>
              <li className="pl-1">
                <SvgStar />
              </li>
              <li className="pl-1">
                <SvgStar />
              </li>
              <li className="">
                <p className="text-[12px]">(421 Reviews)</p>
              </li>
            </ul>
            <p className="md:pl-[45px] pl-4 text-[20px] pt-2 leading-[28px]">
              ₵ 2,000
            </p>
            <p className="border border-[#CECECE] md:ml-10 mt-4 md:w-auto ml-4 w-[90%]"></p>
            <div className="flex justify-between">
              <p className="md:pl-10 pl-4 font-archivo pt-4 md:leading-[30px]">
                Ring Size
              </p>
              <p className="text-right md:pr-2 pr-4 font-archivo pt-4 md:leading-[30px]">
                Size Guild
              </p>
            </div>
            <div className="md:w-auto md:flex md:flex-col md:ml-0 ml-2 sm:flex">
              <ul className="flex md:ml-10 pt-2 ml-3 pb-4   md:w-auto">
                {sizes.map((size, index) => (
                  <li className="pr-2 md:w-auto " key={index}>
                    <button
                      className="w-9 h-9 border border-solid border-black "
                      type="button"
                    >
                      {size}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="flex md:ml-10 ml-3">
                {sizes.map((size, index) => (
                  <li className="pr-2" key={index}>
                    <button
                      className="w-9 h-9 border border-solid border-black"
                      type="button"
                    >
                      {size}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <p className="md:pl-10 pl-3 pt-4 leading-[28px] font-archivo font-medium text-[16px]">
              Quality
            </p>
            <button className="md:ml-10 w-[40%] ml-4 border border-solid border-black h-12 md:my-1">
              <span className="pr-6">-</span>
              <span className="pr-6">1</span>
              <span className="pr-4">+</span>
            </button>
            <div>
              <button className="flex text-center justify-center text-white md:ml-10 mt-4 w-[92%] md:w-full ml-4 h-[55px] bg-[#462416]">
                {' '}
                <span className="pt-2">
                  <SvgCart className="w-6 bg-[#462416]" />
                </span>
                <span className="pt-3 pl-1 pr-4">Add to cart</span>
              </button>
              <button className="border border-solid border-black h-[55px] w-[92%] ml-4 md:w-full md:ml-10 md:mx-0 mt-4">
                Add to WishList
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductDetails />

      <SlideShow slides={slides} title="You May Also Like" />
    </>
  );
}

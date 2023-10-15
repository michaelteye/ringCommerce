import product from '../../assets/images/Product.png';
import SvgStar from '../icons/star';
import SvgCart from '../icons/cart';
export default function Product() {
  const sizes = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5];
  return (
    <>
      <div className=" md:flex grid grid-col-1">
       
          <div className="md:flex md:w-[20%] grid grid-cols-2">
            <ul className="md:w-[40%] md:flex-col flex ">
              <li className=" py-4">
                <img src={product} className="md:ml-[150px]" alt="" />
              </li>
              <li className=" py-4">
                <img src={product} className="md:ml-[150px]" alt="" />
              </li>
              <li className=" py-4">
                <img src={product} className="md:ml-[150px]" alt="" />
              </li>
              <li className=" py-4">
                <img src={product} className="md:ml-[150px]" alt="" />
              </li>
            </ul>
          </div>
          <div className="w-[40%] pl-2 pt-4">
            <img src={product} className="" alt="" />
          </div>
     
        <div>
          <div>
            <p className="pl-10 pt-2 font-clash-display font-medium leading-[40px] text-[24px]">
              Plain Shaped Wedding Band
            </p>
            <ul className="flex">
              <li className="pl-10 ">
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
            <p className="pl-[45px] text-[20px] pt-2 leading-[30px]">₵ 2,000</p>
            <p className="border border-[#CECECE] ml-10 mt-4"></p>
            <div className="flex justify-between">
              <p className="pl-10 font-archivo pt-4 leading-[30px]">
                Ring Size
              </p>
              <p className="text-right font-archivo pt-4 leading-[30px]">
                Size Guild
              </p>
            </div>
            <div>
              <ul className="flex pl-10 pt-2 pb-4">
                {sizes.map((size, index) => (
                  <li className="pr-2" key={index}>
                    <button
                      className="w-10 h-10  border border-solid border-black"
                      type="button"
                    >
                      {size}
                    </button>{' '}
                  </li>
                ))}
              </ul>
              <ul className="flex pl-10">
                {sizes.map((size, index) => (
                  <li className="pr-2" key={index}>
                    <button
                      className="w-10 h-10  border border-solid border-black"
                      type="button"
                    >
                      {size}
                    </button>{' '}
                  </li>
                ))}
              </ul>
            </div>
            <p className="pl-10 pt-4 leading-[30px] font-archivo font-medium text-[16px]">
              Quality
            </p>
            <button className="ml-10 w-[40%] border border-solid border-black h-12 my-2">
              <span className="pr-6">-</span>
              <span className="pr-6">1</span>
              <span className="pr-4">+</span>
            </button>
            <div>
              <button className="flex text-center justify-center text-white ml-10 mt-4 w-full h-[55px] bg-[#462416]">
                {' '}
                <span className="pt-2">
                  <SvgCart className="w-6 bg-[#462416]" />
                </span>
                <span className="pt-3 pl-1 pr-4">Add to cart</span>
              </button>
              <button className="border border-solid border-black h-[55px] w-full ml-10 mt-4">
                Add to WishList
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

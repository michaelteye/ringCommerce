import { useParams } from 'react-router-dom';
import { useShopSDetails } from '../../Hooks/product/useShop';
import SvgCart from '../icons/cart';
import { StarRating } from './components/StarRating';

interface ProductInfoProps {
  name: string;
  price: string;
  itemSizes: number[];
  stockQuantity: number;
}

const GetProductInfo = ({
  name,
  price,
  itemSizes,
  stockQuantity,
}: ProductInfoProps) => {
  const { product_id } = useParams();
  const { data: productData, isLoading, isError } = useShopSDetails(product_id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || productData === undefined) {
    return <p>Error loading product review</p>;
  }

  if (!productData) {
    return <div>No product details found</div>;
  }

  const { averageRating, totalRating } = productData;
  console.log('the review data is given as >>>', totalRating);

  return (
    <>
      <p className="md:pl-10 pl-4 pt-2 font-clash-display font-medium leading-[40px] text-[24px]">
        {name}
      </p>

      {averageRating && (
        <div className="flex items-center pl-9">
          <StarRating averageRating={averageRating} />
          <span className="ml-2 text-gray-600"></span>
          <span className="text-black">({totalRating}Reviews)</span>
        </div>
      )}
      {!averageRating && (
        <div className="flex items-center ">
          <StarRating averageRating={averageRating} />
          <span className="ml-2 text-gray-600"></span>
          <span className="text-black">({totalRating}Reviews)</span>
        </div>
      )}

      <p className="md:pl-[45px] pl-4 text-[20px] pt-2 leading-[28px]">
        {price}
      </p>
      <div className="justify-between">
        <p className="border border-[#CECECE] md:ml-10 mt-4 w-[28rem]"></p>
        <div className="flex">
          <p className="md:pl-10 font-archivo pt-4 md:leading-[30px] pl-10 text-lg font-bold">
            Ring Size
          </p>
          <p className="text-right font-archivo pt-4 md:leading-[30px] ml-72 text-lg font-bold">
            Size Guild
          </p>
        </div>
      </div>
      <div className="md:w-auto md:flex md:flex-col md:ml-0 ml-2 sm:flex">
        <ul className="flex md:ml-10 ml-3 pb-4 flex-wrap">
          {itemSizes &&
            [...Array(Math.ceil(itemSizes.length / 8))].map((_, rowIndex) => {
              console.log(`Row Index: ${rowIndex}`);
              return (
                <div key={rowIndex} className="flex">
                  {itemSizes
                    .slice(rowIndex * 8, (rowIndex + 1) * 8)
                    .map((size, index) => {
                      console.log(`  Item Index: ${index}, Size: ${size}`);
                      return (
                        <li className="pr-2 md:w-auto pb-2" key={index}>
                          <button
                            className="w-12 h-12 border border-solid border-black "
                            type="button"
                          >
                            {size}
                          </button>
                        </li>
                      );
                    })}
                </div>
              );
            })}
        </ul>
      </div>
      <p className="md:pl-10 pl-3 leading-[28px] font-archivo text-lg font-extrabold tracking-wider">
        Quality
      </p>

      <button className="md:ml-10 ml-4 border border-solid border-black  h-12 md:my-1 text-xl">
        <span className="pr-6 pl-4 font-bold">-</span>
        <span className="pr-6">{stockQuantity}</span>
        <span className="pr-4 font-bold ">+</span>
      </button>
      <div className="w-[28rem]">
        <button className="flex text-center justify-center text-white md:ml-10 mt-4 w-[92%] md:w-full ml-4 h-[55px] bg-[#462416]">
          {' '}
          <span className="pt-2">
            <SvgCart className="w-6 bg-[#462416]" />
          </span>
          <span className="pt-3 pl-1 pr-4 ">Add to cart</span>
        </button>
        <button className="border border-solid border-black h-[55px] w-[92%] ml-4 md:w-full md:ml-10 md:mx-0 mt-4">
          Add to WishList
        </button>
      </div>
    </>
  );
};
export default GetProductInfo;

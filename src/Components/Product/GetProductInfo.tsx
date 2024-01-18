import React from 'react';

interface ProductInfoProps {
  name: string;
  price: string;
  sizeoPtions: number[];
  stockQuantity: number;
}

const GetProductInfo = ({
  name,
  price,
  sizeoPtions,
  stockQuantity,
}: ProductInfoProps) => {
  return (
    <>
      <p className="md:pl-10 pl-4 pt-2 font-clash-display font-medium leading-[40px] text-[24px]">
        {name}
      </p>
      {/* review section goes here */}
      <p className="md:pl-[45px] pl-4 text-[20px] pt-2 leading-[28px]">
        {price}
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
    </>
  );
};

export default GetProductInfo;

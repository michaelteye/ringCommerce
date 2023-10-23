import React from 'react';
import SvgClose from '../icons/close';
import SvgStar from '../icons/star';
import SvgUpload from '../icons/upload';

interface closeModalProp {
  onClose: () => void;
}
export const ReviewFormModal: React.FC<closeModalProp> = ({ onClose }) => {
  return (
    <div 
    className="md:w-[35%] w-[96%] bg-[#FFFFFF] 
     ml-2 shadow-xl  justify-center md:ml-[810px] border py-3 md:pr-6 mt-4 md:mt-[-140px]">
      <div className=" flex justify-between pl-3">
        <h3 className=" font-clash-display leading-8 font-medium text-[24px] pb-6">
          Product Review Form
        </h3>
        <SvgClose onClick={onClose} className="w-9 h-7 hover:cursor-pointer"/>
      </div>

      <p className="pl-3 font-archivo text-[18px] pb-2">
        How would you rate this product?
      </p>
      <div className=" md:pl-3 md:w-[50%] w-[50%] ml-4 md:ml-0">
        <ul className="flex   font-archivo leading-[20px] mb-4 py-3 justify-center bg-[#FAF9E3]">
          <li className="">
            <SvgStar className="h-10 w-10" />
          </li>
          <li>
            <SvgStar className="h-10 w-10" />
          </li>
          <li>
            <SvgStar className="h-10 w-10" />
          </li>
          <li>
            <SvgStar className="h-10 w-10" />
          </li>
        </ul>
      </div>
      <p className="pl-3 font-archivo text-[18px] pb-2">
        Tell us what you think about the product
      </p>
      <div>
        <form action="">
          <textarea
            name=""
            id=""
            className="border-2 h-[100px] mx-3 w-[95%] mt-2 pl-2 py-2"
            cols={30}
            rows={10}
            placeholder="Write your review here..."
          ></textarea>
          <p className="pl-3 font-archivo text-[18px] pb-2">
            Attach Image (optional)
          </p>

          <div className="flex items-center justify-center ml-3  w-[95%]">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-[100px] border-2 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <SvgUpload />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <div className="text-center py-4">
            <button className="w-[95%] bg-[#462416] text-white py-4">
              Post Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

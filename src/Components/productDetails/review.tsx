import React from 'react';
import SvgStar from '../icons/star';
import SvgDownArrow from '../icons/downarrow';
import { CustomerReviewData } from './customerReviewData';
import { ReviewFormModal } from './reviewForm';
import { useState } from 'react';
import { useShopSDetails } from '../../Hooks/product/useShop';
import { useParams } from 'react-router-dom';
import { StarRating } from '../Product/components/StarRating';
const Review: React.FC = () => {
    const [reviewForm, setReviewForm ] = useState(false)
    const {product_id } = useParams()

    const {data, isLoading} = useShopSDetails(product_id)

      if(isLoading){
        return <div>Loading the review Data</div>
      }

    if(!data){
      return <div>No product reviews found</div>;
    }

    const {totalRating, averageRating} = data;

    const handleFormModal = ()=>{
       console.log('modal is open');
       return setReviewForm(!reviewForm)
    }
  return (
    <>
      <div className=" md:border md:ml-[150px] md:mr-[100px] md:mt-10">
        <div className="md:pl-[150px] pl-[20px]">
          <h3 className=" font-clash-display2 md:leading-[40px] leading-[30px] text-[24px] md:text-[32px] py-2 md:py-4">
            Customers Reviews
          </h3>
        </div>
        <div className="pb-2 md:flex">
          <div className="md:pl-[150px] md:w-auto w-[60%] pl-[20px]">
          {averageRating && (
        <div className="flex items-center justify-evenly ">
          <StarRating averageRating={averageRating} />
          <span className="ml-2 text-gray-600"></span>
          <span className="text-black">{averageRating} out of 5</span>
        </div>
      )}
      {!averageRating && (
        <div className="flex justify-between ">
          <StarRating averageRating={averageRating} />
          <span className="ml-2 text-gray-600"></span>
          <span className="text-black">({totalRating}Reviews)</span>
        </div>
      )}
            <p>Based on {totalRating} reviews</p>
          </div>
          <div className="md:pl-[120px]">
            <ul className="flex border-l border-r border-[#E0E0E0] my-2 h-16 md:pl-0 pl-5">
              <li className="md:pl-8">
                <SvgStar />
              </li>
              <li>
                <SvgStar />
              </li>
              <li>
                <SvgStar />
              </li>
              <li className="md:text-sm pr-8 text-[12px] pl-1">(19)</li>
            </ul>
            <div className="md:ml-[-340px] md:pt-[70px] ml-[250px] md:mt-0 mt-[-22px]">
              <button className="flex bg-white text-[#462416] border py-2 px-2 md:my-2 md:mx-2 md:px-4 md:py-4 font-archivo">
                <span>Most Recent</span>
                <span className="">
                  <SvgDownArrow />
                </span>
              </button>
            </div>
          </div>
          <div className="md:pl-[350px] md:w-auto w-full md:py-0 py-5 pl-4">
            <button onClick={()=>handleFormModal()} className=" text-white bg-[#462416] md:w-auto w-[95%] md:px-10 py-2 md:py-4">
              Write a review
            </button>
          </div>
        </div>
      </div>
      {reviewForm && <ReviewFormModal onClose={handleFormModal} />}

      <CustomerReviewData/>
    </>
  );
};

export default Review;

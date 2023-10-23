
import user from "../../assets/images/Ellipse.png"
import reviewImage from '../../assets/images/reviewimage.png'
import SvgCar from "../icons/car"
import Svgheadset from "../icons/headset"
import SvgSign from "../icons/sign"
import SvgStar from "../icons/star"
export const CustomerReviewData = ()=>{
  return (
    <>
    <div className="">
        <div className="flex">
            <div className="md:pl-[150px] md:py-10 pt-10 pl-4">
                <img src={user} className='w-10 rounded-full' alt="" />
            </div>
            <div className="py-10 pl-4">
                <ul className="flex">
                    <li>
                       <SvgStar/> 
                    </li>
                    <li>
                       <SvgStar/> 
                    </li>
                    <li>
                       <SvgStar/> 
                    </li>
                </ul>
                <h4>John Doe</h4>
            </div>
        </div>
        <div className="md:pl-[150px] md:py-2 md:mt-0 mt-[-18px]">
            <p className=" font-bold font-archivo md:pl-0 pl-10">Very Nice Ring</p>
            <p className=" md:pl-0 pl-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis rem ut, sunt quia fugiat delectus num aliquid deserunt quibusdam.</p>
        </div>
        <div className="md:pl-[150px] pl-[42px]">
            <img src={reviewImage} className='md:w-[7%] w-[40%]' alt="" />
        </div>
        <p className="md:pl-[150px] pt-4 pl-[42px]">18/06/2023</p>

        <div className=" justify-center text-center pb-[60px] md:my-2 mt-6">
            <button className="border md:px-10 px-[50px] py-4 border-[#462416] md:w-[20%] ">View More</button>
        </div>
        <div>
            <ul className="md:flex grid grid-cols-1 md:mx-6 md:mb-10">
          <li className="bg-[#d9d9d9c0] mx-2 px-2 my-2 ">
            <SvgCar className="bg-[#E0A65A] w-10 h-10 rounded-full p-2 mt-4 ml-3 mb-1" />
            <h3 className="pl-4 font-bold">Free Tracked Delivery</h3>
            <p className="px-4 pb-4"> 
              Shipping is free, and your order is always tracked and insured.
            </p>
          </li>
          <li className="bg-[#d9d9d9c0] mx-2 my-2 px-2 py-4">
            <SvgSign className="bg-[#E0A65A] w-10 h-10 rounded-full p-2 ml-3 mb-1" />
            <h3 className="pl-4 font-bold">Money Back Guarantee</h3>
            <p className="px-4 pb-4">Purchase with peace of mind with our 60 days guarantee.</p>
          </li>
          <li className="bg-[#d9d9d9c0] mx-2 my-2 px-2 py-4">
            <Svgheadset className="bg-[#E0A65A] w-10 h-10 rounded-full p-2 ml-3 mb-1 "/>
            <h3 className="pl-4 font-bold">Personal Service</h3>
            <p className="px-4 pb-4">
              We help you find the perfect piece without stress. We assist you
              on phone, in person or live chat
            </p>
          </li>
        </ul>
        </div>

    </div>
    </>
  )
}

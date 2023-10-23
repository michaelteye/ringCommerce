import SvgCar from "../../icons/car";
import Svgheadset from "../../icons/headset";
import SvgSign from "../../icons/sign";


export default function ProductSupport() {
  return (
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
  )
}

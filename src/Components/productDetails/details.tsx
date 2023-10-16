import SvgCar from "../icons/car";
import SvgPhone from "../icons/phone";

export default function Details() {
  return (
    <>
      <div className="pl-2">
        <p className="pt-1 pl-4 leading-[20px] pb-6 text-left pr-2">
          Monarch presents a slim, classic style for the professional. The
          tungsten carbide build faced with a rose gold rhombus plating ensures
          that Monarch is highly durable whilst retaining it's elegance -
          perfect for kings and queens alike. Tungsten carbide is one of the
          strongest compounds known. Our craftsmanship ensures a high-class
          composite that is extremely impact and scratch resistant, durable and
          hypoallergenic.
        </p>
      </div>
      <div className="flex">
        <p className="pl-6 font-bold">Metal:</p>
        <p className="pl-6">Gold</p>
      </div>

      <div className="flex">
        <p className="pl-6 font-bold">Width:</p>
        <p className="pl-6">4mm</p>
      </div>
      <div className="flex">
        <p className="pl-6 font-bold">Thickness:</p>
        <p className="pl-6">4mm</p>
      </div>

      <div>
        <ul className="md:flex grid grid-cols-1">
          <li className="bg-[#D9D9D9] mx-2 my-2">
            <SvgCar className="bg-orange-600 w-10 h-10 rounded-full p-2 m-2" />
            <h3>Free Tracked Delivery</h3>
            <p> 
              Shipping is free, and your order is always tracked and insured.
            </p>
          </li>
          <li className="bg-[#D9D9D9] mx-2 my-2">
            <SvgPhone className="bg-orange-600 w-10 h-10 rounded-full p-2 m-2" />
            <h3>Money Back Guarantee</h3>
            <p>Purchase with peace of mind with our 60 days guarantee.</p>
          </li>
          <li className="bg-[#D9D9D9] mx-2 my-2">
            <SvgPhone className="bg-orange-600 w-10 h-10 rounded-full p-2 m-2 b"/>
            <h3>Personal Service</h3>
            <p>
              We help you find the perfect piece without stress. We assist you
              on phone, in person or live chat
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

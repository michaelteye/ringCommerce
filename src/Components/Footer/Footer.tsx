import logo from '../../assets/images/logo.png';
import SvgFacebook from '../icons/facebook';
import SvgInstagram from '../icons/instagram';
import SvgMail from '../icons/mail';
import SvgTwitter from '../icons/twitter';
import SvgPhone from '../icons/phone';

export default function Footer() {
  return (
    <>
      <div className="md:flex bg-[#FAF9E3] grid grid-cols-1 ">
        <div className="py-10 md:w-auto w-full">
          <img src={logo} className="my-4 mx-8" alt="" />
          <p className=" font-archivo font-normal text-[16px] md:w-[50%]  mx-8 leading-[20px] my-2">
            Experience the enchantment of Sparkling Gems and discover the
            perfect ring to adorn your finger with grace and brilliance.
          </p>
          <ul className="flex mx-6">
            <li className="px-2 py-2">
              <SvgFacebook />
            </li>
            <li className="px-2 py-2">
              <SvgInstagram />
            </li>
            <li className="px-2 py-2">
              <SvgTwitter />
            </li>
            <li className="px-2 py-2">
              <SvgMail />
            </li>
          </ul>
          <p className="flex mx-6 py-2">
            <span>
              <SvgPhone />
            </span>{' '}
            <span className="pl-2">+23324956735</span>
          </p>
        </div>
        <div className='flex md:w-full '>
          <div className="md:w-[40%] py-[50px] ml-8">
            <ul className=" justify-between text-left md:w-auto w-full font-archivo ">
              <li className=' font-bold font-clash-display'>Customer Service</li>
              <li>Contact Us</li>
              <li>Delivery</li>
              <li>Return & Exchange</li>
              <li>Shipping</li>
            </ul>
          </div>

          <div className="md:w-[100 py-[50px]">
            <ul className=" justify-between text-left font-archivo pl-7">
              <li className=' font-bold font-clash-display' >Service & Policies</li>
              <li>My Account</li>
              <li>Categories</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="w-[30%] py-[50px]">
          <ul className=" justify-between text-left font-archivo ml-10 md:ml-0">
            <li className=' font-bold font-clash-display'>Company</li>
            <li>About Us</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className='justify-center text-center bg-[#FAF9E3] py-4'>
        <p className=' font-archivo'>©Copyright 2023 Clinel Jewellery. <br className='md:hidden ' /> All Rights Reserved</p>
      </div>
    </>
  );
}

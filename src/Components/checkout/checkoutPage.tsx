import logo from '../../assets/images/logo.png';
import SvgRight from '../icons/right';
import SvgLeft from '../icons/left';

import image2 from '../../assets/images/eternal.png';
import image3 from '../../assets/images/engagement.png';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  const orderimages = [image2, image2, image3];
  return (
    <>
      <div className="md:flex md:flex-row flex flex-col-reverse">
        <div className="md:w-[40%]">
          <div className="text-center justify-center md:pl-[200px] pt-10">
            <img
              src={logo}
              className=" hidden md:block justify-center md:w-[50%]  text-center"
              alt=""
            />
            <ul className="flex space-x-1 pt-6 md:pl-0 pl-4 md:justify-start  justify-center">
              <li className="text-[15.41px] font-archivo font-normal">Cart</li>
              <li className="pt-2">
                <SvgRight className="text-[#462416] pb-1" />
              </li>
              <li className="text-[15.41px] font-archivo font-normal">
                information
              </li>
              <li className="pt-2">
                <SvgRight className="text-[#747474] pb-5" />
              </li>
              <li className="text-[#747474] text-[15.41px] font-archivo font-normal">
                Payment
              </li>
            </ul>
          </div>
          <div className="md:pl-[60px]">
            <p className="font-clash-display font-medium text-[24px] pb-3 md:leading-[30px] pt-4 md:pl-0 pl-4 leading-6">
              Delivery Information
            </p>
          </div>
          <form>
            <div className="md:flex md:w-auto w-[96%] ">
              <div className="md:pl-[60px] pl-4">
                <label htmlFor="">First Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Michael"
                  className="w-full py-2 pl-2 border-2 md:mb-6 mb-3"
                />
                <label htmlFor="">Email</label>
                <br />
                <input
                  type="email"
                  placeholder="demo@gmail.com"
                  className="w-full py-2 pl-2 border-2"
                />
              </div>
              <div className="md:pl-5 pl-4 pt-3 md:pt-0">
                <label htmlFor="">Last Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Teye"
                  className="w-full py-2 pl-2 border-2 md:mb-6 mb-3"
                />
                <label htmlFor="">Phone</label>
                <br />
                <input
                  type="number"
                  placeholder="+233556578844"
                  className="w-full py-2 pl-2 border-2"
                />
              </div>
            </div>

            <label
              htmlFor="countries"
              className="block md:mt-7 mt-3 mb-[-14px] text-sm font-medium text-gray-900 md:pl-[60px] pl-4"
            >
              Region
            </label>
            <select
              id="countries"
              className="bg-gray-50 mb-4 border-gray-300 mt-[20px] ml-4 md:ml-[55px] outline-none text-gray-900 text-sm border-2 block md:w-[89%] w-[92%] py-2 px-4 "
            >
              <option selected>Choose your Region</option>
              <option value="US">Greater Accra</option>
              <option value="CA">Asante Region</option>
              <option value="FR">Central Region</option>
              <option value="DE"></option>
            </select>

            <label
              htmlFor="countries"
              className="block md:mt-7 mb-[-14px] text-sm font-medium text-gray-900 md:pl-[60px] pl-4"
            >
              Residential/GPS Address
            </label>
            <select
              id="countries"
              className="bg-gray-50 mb-4 border-gray-300 mt-[20px] ml-4 md:ml-[55px] outline-none text-gray-900 text-sm border-2 block md:w-[89%] py-2 px-4 w-[92%] "
            >
              <option selected>Choose your Region</option>
              <option value="US">Achimota</option>
              <option value="CA">Nsawam</option>
              <option value="FR">Tesano</option>
              <option value="DE">East Legon</option>
            </select>

            <div className="pt-4 pb-2 md:pl-[55px]">
              <h3 className="leading-[30px] text-[20px] md:pl-0 pl-4 md:text-[24px] font-semibold mb-2 font-clash-display">
                Payment Method
              </h3>
              <p className=" font-archivo leading-4 font-normal text-base md:pl-0 pl-4">
                Select a payment option
              </p>
              <ul className="md:flex mt-2 md:w-auto w-[90%] md:ml-0 ml-4">
                <li className="border md:mr-2 md:px-4 md:py-4 py-2 px-2 my-2 md:my-0">
                  card
                </li>
                <li className="border md:mx-2 md:px-4 md:py-4 py-2 px-2 my-2 md:my-0">
                  Mobile Money
                </li>
                <li className="border md:mx-2 md:px-4 md:py-4 py-2 px-2 my-2 md:my-0">
                  Cash on delivery
                </li>
              </ul>
              <div className="inline-flex items-center md:ml-0 ml-4 pt-4">
                <input
                  type="checkbox"
                  id="checkbox-option"
                  className="form-checkbox text-[#462416] h-5 w-5"
                />
                <label htmlFor="checkbox-option" className="ml-2">
                  Checkbox Option
                </label>
              </div>
            </div>
            <div className="md:flex md:flex-row flex flex-col-reverse">
              <button className="flex md:pt-8 font-archivo justify-center pb-10">
                <span className="md:pl-[55px] pr-1 pt-1.5">
                  <SvgLeft />
                </span>{' '}
                <Link to="/payment/card" className=" font-archivo font-medium text-base text-center">
                  Return to Cart
                </Link>{' '}
              </button>
              <button className="bg-[#462416] px-[55px] py-4 font-archivo md:w-auto w-[89%] ml-6 leading-4 text-center font-medium text-white md:ml-[140px] mb-10 mt-6">
                Proceed to Pay
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <div className="md:w-[62%] md:border-2 mt-10 md:ml-[70px] md:h-[60%]">
            <div className="text-left pt-[40px]">
              <p className=" font-clash-display font-medium md:pl-4 pb-8 pl-4  md:text-2xl text-xl">
                Order Summary
              </p>
            </div>
            <div className=" justify-center text-center">
              {orderimages.map((image, index) => (
                <ul className="flex">
                  <li key={index} className="flex relative">
                    {/* <span> */}
                    <img
                      src={image}
                      className="md:w-[18%] w-[30%] m-4 border-2"
                      alt=""
                    />
                    <p className="absolute top-0.5  md:left-[101px] left-[114px] rounded-full bg-black text-white px-2 ">
                      1
                    </p>
                    {/* </span> */}
                    <span className="text-left pt-5">
                      <p className=" font-archivo font-normal md:leading-4 md:pb-2">
                        Plain Shaped Wedding Band
                      </p>
                      <p className=" md:text-[13px] md:leading-[15px] text-[#747474]">
                        Color: Yellow Gold
                      </p>
                      <p className="md:text-[13px] md:leading-[15px] text-[#747474]">
                        Size: 7
                      </p>
                    </span>
                    <span className="mt-8 md:ml-[60px]">
                      <p className="md:pl-10 pt-2 pr-2">¢2,000</p>
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="text-right md:pr-[348px] md:ml-[70px]  w-[100%]  mt-2 flex">
            <input
              type="text"
              className="border text-left md:pl-[116px]  pl-[1px] px-10 py-2 md:w-[61%] md:ml-0 ml-4 w-[100%]"
              placeholder="Gift Card or Discount Code"
            />
            <button
              className="p bg-[#462416] text-white text-center px-10 md:w-[20%] mx-2"
              type="button"
            >
              Apply
            </button>
          </div>
          <div className="flex md:ml-[70px] md:border md:w-[62%] border-t-1.5 border-solid mt-4">
            <ul className=" md:pr-[90px] md:pl-4 pl-4 md:py-2">
              <li>Subtotal</li>
              <li>Delivery</li>
            </ul>
            <ul className="md:pl-[300px] pl-[250px]  py-2">
              <li>¢2,000</li>
              <li>¢2,000</li>
            </ul>
          </div>
          <div className="flex md:ml-[70px] md:border w-[62%]  ">
            <ul className="md:pr-[50px] pl-4 py-2 flex border-b-2">
              <li>Total</li>
              <li className="md:pl-[415px] pl-[275px]">¢2,000</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

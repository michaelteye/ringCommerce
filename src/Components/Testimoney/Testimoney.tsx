import user from "../../assets/images/images.png"
import SvgStar from "../icons/star";
export const Testimoney = () => {
  return (
    <>
      <div className=" justify-center text-center pb-2">
        <p className=" font-clash-display text-[48px] font-bold">Testimonials</p>
      </div>
      <div className=" w-full">
        <ul className=" md:flex mx-2 text-center justify-center sm:grid sm:grid-cols-1 ">
          <li className=" md:w-[30%] w-auto mx-2 border my-4 border-[#E0A65A] p-4 md:mr-8 leading-[30.41px] font-archivo text-left">
            “I recently purchased a stunning diamond engagement ring from this
            website, and I couldn't be happier with my decision. The ring's
            craftsmanship is impeccable, and the quality of the diamond is truly
            remarkable. The customer service team was also incredibly helpful,
            guiding me through the selection process and ensuring I found the
            perfect ring. ”
            <span className="flex pt-2">
                <p>
                    <img src={user} className='w-10 rounded-full' alt="" />
                </p>
                <p className=" text-lg pl-1">Mike Austin <span className="flex"><SvgStar/><SvgStar/><SvgStar/></span></p>
            </span>
          </li>
          <li className=" md:w-[30%] border p-4 md:mx-4 mx-2 my-4 leading-[30.41px] font-archivo text-left border-[#E0A65A] w-auto">
            “I recently purchased a stunning diamond engagement ring from this
            website, and I couldn't be happier with my decision. The ring's
            craftsmanship is impeccable, and the quality of the diamond is truly
            remarkable. The customer service team was also incredibly helpful,
            guiding me through the selection process and ensuring I found the
            perfect ring. ”
            <span className="flex pt-2">
                <p>
                    <img src={user} className='w-10 rounded-full' alt="" />
                </p>
                <p className=" text-lg pl-1">Mike Austin <span className="flex"><SvgStar/><SvgStar/><SvgStar/></span></p>
            </span>
          </li>
          <li className=" md:w-[30%] border p-4 md:ml-8 mx-2 leading-[30.41px] my-4 font-archivo text-left border-[#E0A65A] w-auto">
            “I recently purchased a stunning diamond engagement ring from this
            website, and I couldn't be happier with my decision. The ring's
            craftsmanship is impeccable, and the quality of the diamond is truly
            remarkable. The customer service team was also incredibly helpful,
            guiding me through the selection process and ensuring I found the
            perfect ring. ”
            <span className="flex pt-2">
                <p>
                    <img src={user} className='w-10 rounded-full' alt="" />
                </p>
                <p className=" text-lg pl-1">Mike Austin <span className="flex"><SvgStar/><SvgStar/><SvgStar/></span></p>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

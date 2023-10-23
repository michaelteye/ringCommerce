
import SvgStar from '../../icons/star';
import SvgQuality from '../../icons/quality';
import SvgLove from '../../icons/love';
import img from '../../../assets/images/support1.png'
import img2 from '../../../assets/images/bold.png'



export default function SupportTypes() {
  return (
    <div>
      <ul className="md:flex grid grid-cols-1 md:mx-6 md:mb-10">
        <li className=" mx-2 px-2 my-2 w-[50%] ">
          <SvgQuality className="bg-[#E0A65A] w-10 h-10 rounded-full p-2 mt-4 ml-3 mb-1" />
          <h3 className="pl-4 font-bold">Quality & Craftsmanship</h3>
          <p className="px-4 pb-4 ">
            We take immense pride in the quality and craftsmanship of our rings.
            Each ring is meticulously handcrafted using the finest materials,
            ensuring durability and longevity. Our attention to detail sets us
            apart, as we believe that every ring should be a true masterpiece.
            When you shop with us, you can trust that you're getting a ring that
            not only looks  exquisite  but also stands the  test  of time.
          </p>
        </li>
        <li className=" w-1/2 text-left justify-start mx-2 my-2 px-2 py-4">
         <img src={img} className="w-[100%]" alt="" />
        </li>
        <li className=" mx-2 px-2 my-2 w-[50%] ">
          <SvgStar className="bg-[#E0A65A] w-10 h-10 rounded-full p-2 mt-4 ml-3 mb-1" />
          <h3 className="pl-4 font-bold"> Quality & Craftsmanship </h3>
          <p className="px-4 pb-4">
            We take immense pride in the quality and craftsmanship of our rings.
            Each ring is meticulously handcrafted using the finest materials,
            ensuring durability and longevity. Our attention to detail sets us
            apart, as we believe that every ring should be a true masterpiece.
            When you shop with us, you can trust that you're getting a ring that
            not only looks exquisite but also stands the test of time
          </p>
        </li>
      </ul>

      {/* second Section */}

      <ul className="md:flex grid grid-cols-1 md:mx-6 md:mb-10">
        <li className=" mx-2 px-2 my-2 w-[50%] ">
          <img src={img2} alt="" />
        </li>
        
        <li className=" mx-2 px-2 my-2 w-[50%] ">
          <SvgLove className="bg-[#E0A65A] w-10 h-10 rounded-full p-2 mt-4 ml-3 mb-1" />
          <h3 className="pl-4 font-bold"> Quality & Craftsmanship </h3>
          <p className="px-4 pb-4">
            We take immense pride in the quality and craftsmanship of our rings.
            Each ring is meticulously handcrafted using the finest materials,
            ensuring durability and longevity. Our attention to detail sets us
            apart, as we believe that every ring should be a true masterpiece.
            When you shop with us, you can trust that you're getting a ring that
            not only looks exquisite but also stands the test of time
          </p>
        </li>
        <li className=" mx-2 px-2 my-2 w-[50%] ">
          <img src={img2} alt="" />
        </li>
      </ul>
      
    </div>
  );
}

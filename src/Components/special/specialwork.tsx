
import handicraft from '../../assets/images/handcraft.png';

export default function SpecialWork() {
  return (
    <div className="w-full flex md:flex-row flex-col-reverse">
        <div
          className=" w-auto h-[50vh] md:w-[60%] bg-center md:h-[50vh] text-center object-cover md:mx-4 my-10 mx-4"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${handicraft})`,
          }}
        ></div>
        <div className="md:w-1/2">
          <div className="text-left justify-end pl-2 md:pt-[80px] ml-6">
            <h3 className=" font-clash-display2 md:text-[40px] text-[24px] ">
              Handcrafted & Ethically
            </h3>
            <h3 className="font-clash-display2 md:text-[40px] text-[24px]">
              Sourced
            </h3>
            <p className=" font-archivo leading-[20px] pr-2">
              We work with expert jewelers who use high-quality and enduring
              materials, from precious metals like recycled and responsibly
              mined gold to ethically sourced diamonds and AAA-grade gemstones
            </p>
          </div>
          <div className="md:block hidden">
            <button className=" bg-[#462416] text-white w-[30%] p-4 mt-4 ml-8">
              Learn More
            </button>
          </div>
        </div>
      </div>
  )
}

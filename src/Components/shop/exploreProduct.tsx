import exploreoption from '../../assets/images/ExploreOptions.png';
import explore from '../../assets/images/Explore.png';

export default function ExploreProduct() {
  return (
    <div className="w-full flex md:flex-row flex-col-reverse">
      <div className="relative  h-[50vh] md:w-[35%] bg-center md:h-[50vh] text-center object-cover md:mx-4 my-10 mx-4">
        <img
          src={explore}
          alt="Explore"
          style={{ width: '', height: '100%', objectFit: 'cover' }}
        />
        <div className="absolute bottom-0 left-0  right-0">
          <img
            src={exploreoption}
            alt="Explore Option"
            style={{ 
                 width: '30%',
                 position:'relative',
                 left:"75%",
                 bottom:"35%"
                }}
            className='left-5 right-5'
          />
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="text-left justify-end pl-2 md:pt-[80px] ml-6">
          <h3 className=" font-clash-display2 md:text-[40px] text-[24px] ">
            Explore More Of Our 
          </h3>
          <h3 className="font-clash-display2 md:text-[40px] text-[24px]">
            Product
          </h3>
          <p className=" font-archivo leading-[20px] pr-2">
            With our assortment of stylish band rings, you can express your
            individuality and celebrate your personal milestones. From sleek and
            contemporary designs to intricate patterns and engraved details, our
            bands are a reflection of your unique story, symbolizing the love,
            commitment, and memories you hold dear.
          </p>
        </div>
        <div className="md:block hidden">
          <button className=" bg-[#462416] text-white w-[30%] p-4 mt-4 ml-8">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

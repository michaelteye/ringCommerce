import momoImage from '../../assets/images/momoImage.png';
export const MobileMoney = () => {
  return (
    <>
      <div className="flex ">
        <div className="md:text-center md:justify-center md:w-[60%] md:pt-[150px] md:ml-0 ml-4">
          <h2 className=" font-clash-display leading-8 text-[24px] md:pb-[62px] pb-10">
            Mobile Money
          </h2>
          <p className="leading-5 text-base font-normal pb-4">
            Enter your card details complete payment
          </p>
          <form action="">
            <label htmlFor="" className="md:pr-[30%]">
              Select Service Provider
            </label>
            <br />
            <input
              type="text"
              placeholder="Mercy Amposah"
              className="border-2 md:w-[50%] w-[80%] border-zinc-950 py-2 px-2 mb-4"
            />
            <br />
            <label
              htmlFor="countries"
              className="block md:mt-3 md:pr-[330px] md:text-center outline-none mt-3 mb-[-14px] text-sm font-medium text-gray-900 "
            >
              Mobile Number
            </label>
            <select
              id="countries"
              className="border-2 md:w-[50%] mt-4 w-[80%] outline-none border-zinc-950 py-2 px-2 mb-4 "
            >
              <option selected>Airtel Tigo</option>
              <option value="US">MTN</option>
              <option value="CA">Vodafone</option>
              
            </select>

            <div className="mr-2">
              <button className="md:mt-[20px] bg-[#462416] text-white md:py-4 px-[175px] my-4 text-left md:w-auto w-[75%] py-4  md:mr-0">
                Pay¢2,000
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:block justify-end text-right w-[40%]">
          <img
            src={momoImage}
            className="justify-end text-right object-cover w-full "
            alt=""
          />
        </div>
      </div>
    </>
  );
};

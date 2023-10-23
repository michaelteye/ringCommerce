import cardImage from '../../assets/images/cardImage.png';
export const PayWithCard = () => {
  return (
    <>
      <div className="flex ">
        <div className="md:text-center md:justify-center md:w-[60%] md:pt-[150px] md:ml-0 ml-4">
          <h2 className=' font-clash-display leading-8 text-[24px] md:pb-[62px] pb-10'>CardPayment</h2>
          <p className='leading-5 text-base font-normal pb-4'>Enter your card details complete payment</p>
          <form action="">
            <label htmlFor="" className='md:pr-[38%] '>Name on Card</label>
            <br />
            <input type="text" placeholder="Mercy Amposah" className='border-2 md:w-[50%] w-[80%] border-zinc-950 py-2 px-2 mb-4' />
            <br />
            <label htmlFor="" className='md:pr-[38%] '>Card Number</label>
            <br />
            <input type="number" placeholder="0000 5624 4312 7853" className='border-2 outline-none border-zinc-950 md:w-[50%] w-[80%] py-2 px-2 mb-4' />
            <div className='md:flex justify-center'>
                <div className='md:text-center'>
                    <label htmlFor="" className=' md:pr-[120px]'>Card Expiry</label>
                    <br />
                    <input type="date" className='border-2 border-zinc-950 md:w-[214px] w-[80%] py-2 px-2' placeholder='24/32' />
                </div>
                <div className='md:ml-4'>
                    <label htmlFor="" className=' md:pr-[88%]'>cvv</label>
                    <br />
                    <input type="number" className='border-2 border-zinc-950 md:w-[214px] w-[80%] py-2 px-2' placeholder='2341' />
                </div>
            </div>
            <div className='mr-2'>
             <button className='md:mt-[120px] bg-[#462416] text-white md:py-4 px-[182px] my-4 text-left md:w-auto w-[75%] py-4  md:mr-0'>Pay¢2,000</button>

            </div>
          </form>
        </div>
        <div className='hidden md:block justify-end text-right w-[40%]'>
          <img src={cardImage} className='justify-end text-right object-cover w-full ' alt="" />
        </div>
      </div>
    </>
  );
};

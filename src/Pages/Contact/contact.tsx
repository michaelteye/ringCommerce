import handcraft from '../../assets/images/handcraft.png';
import map from '../../assets/images/map.png';
import { Layout } from '../../Components/Layout/Layout';
export const Contact = () => {
  return (
    <Layout>
      <div
        className="pt-[460px] pb-[80px] object-cover object-center"
        style={{
          backgroundImage: `url(${handcraft})`,
          backgroundPosition: 'center',
          height: '25%',
        }}
      >
        <div className='md:mb-0 mb-[-19px]'>
          <p className="pl-10 leading-[66.42px] font-clash-display font-bold text-6xl">
            Contact
          </p>
        </div>
      </div>
      <div>
        <h3 className=" font-clash-display text-[30px] py-4 md:pt-10 font-medium leading-9 justify-center text-left pl-4  md:pl-10 md:ml-[80px]">
          Get in touch with us
        </h3>
      </div>
      <div className="md:flex ">
        <div className="w-full md:w-1/2 md:p-8 px-4 ">
          <form>
            <div className="mb-4 md:ml-10">
              <label className="block text-lg font-semibold">Full Name</label>
              <input
                type="text"
                className="md:w-[80%] w-full border-2 border-gray-300 px-4 py-2 rounded-lg"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6 md:ml-10">
              <label className="block text-lg font-semibold">Email</label>
              <input
                type="password"
                className="md:w-[80%] w-full border-2 border-gray-300 px-4 py-2 rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6 md:ml-10">
              <label className="block text-lg font-semibold">
                Phone Number
              </label>
              <input
                type="password"
                className="md:w-[80%] w-full border-2 border-gray-300 px-4 py-2 rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6 md:ml-10 md:w-auto">
              <label className="block text-lg font-semibold">Message</label>
              <textarea
                name=""
                id=""
                cols={55}
                rows={5}
                className="border-2 md:w-[80%] w-[100%] px-4"
                placeholder='write here'
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 ml-10 rounded-lg hover:bg-blue-600">
              submit
            </button>
          </form>
        </div>
        <div className=" w-full md:w-1/2 md:px-0 px-4 pb-4">
          <img src={map} alt="Beautiful Image" className="object-cover " />
        </div>
      </div>
    </Layout>
  );
};

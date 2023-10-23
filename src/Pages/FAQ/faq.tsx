import leftfaq from '../../assets/images/leftfaq.png';
import rightfaq from '../../assets/images/rightfaq.png';
import { Layout } from '../../Components/Layout/Layout';

export const Faq = () => {
  return (
    // <h2 class="mb-6 pl-6 text-3xl font-bold">Frequently asked questions</h2>
    <Layout>
      <div className="md:flex md:mx-0 mx-4 md:mb-0 mb-8">
        <div className="hidden md:block md:w-[30%] ">
          <img src={leftfaq} alt="" />
        </div>
        <div className="md:w-[39%] text-center md:pt-[80px] md:mt-10">
          <ul className="max-w-2xl mx-auto mt-20 divide-y  shadow shadow-blue-600 rounded-xl">
            <li>
              <details className="group">
                <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                  <svg
                    className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                  <span>What am I getting as a Premium Member?</span>
                </summary>

                <article className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et ipsum sapien. Vestibulum molestie porttitor augue vitae
                    vulputate. Aliquam nec ex maximus, suscipit diam vel,
                    tristique tellus.
                  </p>
                </article>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                  <svg
                    className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                  <span>What am I getting as a Premium Member?</span>
                </summary>

                <article className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et ipsum sapien. Vestibulum molestie porttitor augue vitae
                    vulputate. Aliquam nec ex maximus, suscipit diam vel,
                    tristique tellus.{' '}
                  </p>
                </article>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                  <svg
                    className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                  <span>What am I getting as a Premium Member?</span>
                </summary>

                <article className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et ipsum sapien. Vestibulum molestie porttitor augue vitae
                    vulputate. Aliquam nec ex maximus, suscipit diam vel,
                    tristique tellus.{' '}
                  </p>
                </article>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                  <svg
                    className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                  <span>What am I getting as a Premium Member?</span>
                </summary>

                <article className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et ipsum sapien. Vestibulum molestie porttitor augue vitae
                    vulputate. Aliquam nec ex maximus, suscipit diam vel,
                    tristique tellus.{' '}
                  </p>
                </article>
              </details>
            </li>
          </ul>
        </div>
        <div className="hidden md:block md:w-[35%] justify-end md:pl-[350px] md:pt-[300px] text-right">
          <img src={rightfaq} className="text-right justify-end " alt="" />
        </div>
      </div>
    </Layout>
  );
};

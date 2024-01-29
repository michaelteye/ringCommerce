import { useParams } from 'react-router-dom';
import ring1 from '../../assets/images/ring1.png';
import ring2 from '../../assets/images/ring2.png';
import ring3 from '../../assets/images/ring3.png';
import ring4 from '../../assets/images/ring4.png';
import { useShopSDetails } from '../../Hooks/product/useShop';
import { SlideShow } from '../Slide/slide';
import ProductDetails from './components/Details';
import ProductInfo from './components/ProductInfo';
export default function Product() {
  const { product_id } = useParams();
  console.log('the product id is given as >>>', product_id);

  const { data,isLoading, isError } = useShopSDetails(product_id);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!data || !data.details) {
    return <div>No product details found</div>;
  }

  const { details } = data;
  console.log('the details are given as>>>', details)
  const slides = [ring1, ring2, ring3, ring4];
  

  return (
    <>
      <div className=" md:flex grid">
        <div className="md:flex md:w-[20%] grid w-full mr-6">
          {details && (
            <ul className="md:w-1/2 md:ml-0 ml-4 md:flex-col w-[90%] flex">
              {details.images && details.images.length > 0 &&
                details.images.map((image: any, index: any) => (
                  <li key={index} className="py-4">
                    <img
                      src={image}
                      className={`md:ml-[150px] w-[90%] md:w-auto pl-1 ${
                        index !== 0 ? 'ml-2' : ''
                      }`}
                      alt=""
                    />
                  </li>
                ))}
            </ul>
          )}
        </div>

        <div className="md:w-[50%] md:ml-4 pt-4 object-cover">
          {details && details.images && details.images.length > 0 && (
            <img
              src={details.images[0]} // Assuming the first image is the one you want to display
              className="px-4 h-[10% opacity-100 filter brightness-30"
              alt=""
            />
          )}
        </div>
        <div>
          <div>
            <ProductInfo />
          </div>
        </div>
      </div>
      <ProductDetails />
      <SlideShow slides={slides} title="You May Also Like" />
    </>
  );
}

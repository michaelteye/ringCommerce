import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useShopSDetails } from '../../../Hooks/product/useShop';
import Review from '../../productDetails/review';
import GetProductDetails from '../GetProductDetails';
const ProductDetails = () => {
  const [productInfo, setProductInfo] = useState('details');
  const { product_id } = useParams();
  const { data } = useShopSDetails(product_id);

  const {details:shopData} = data

  const handleProductInfo = (infoType: string) => {
    return setProductInfo(infoType);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:flex  text-center justify-center">
        <button
          onClick={() => handleProductInfo('details')}
          className={`font-archivo font-bold pt-10 md:pr-10 pb-4 ${
            productInfo === 'details' ? 'underline' : 'font-archivo font-bold'
          }`}
        >
          Details
        </button>
        <button
          onClick={() => handleProductInfo('reviews')}
          className={`font-archivo font-bold pt-10 md:pl-10  pb-4 ${
            productInfo === 'reviews' ? 'underline' : ''
          }`}
        >
          Reviews
        </button>
      </div>

      {productInfo === 'details' ? 
        shopData && (
        <GetProductDetails
          description={shopData.description}
          material={shopData.material}
          width={shopData.width}
          thickness={shopData.thickness}
        />
        )
       : 
       (
        <Review />
       )
      }
    </>
  );
};
export default ProductDetails;

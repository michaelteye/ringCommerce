import React from 'react';
import { useParams } from 'react-router-dom';
import { useShopSDetails } from '../../../Hooks/product/useShop';
import GetProductInfo from '../GetProductInfo';

const ProductInfo = () => {
  const { product_id } = useParams();
  const { data} =useShopSDetails(product_id);
  if (!data) {
    return <div>No product details found</div>;
  }
 
  const {details:productInfo} = data
  return (
    <>
      {productInfo && (
        <GetProductInfo
          name={productInfo.name}
          price={productInfo.price}
          itemSizes={productInfo.itemSizes}
          stockQuantity={productInfo.stockQuantity}
        />
      )}
    </>
  );
};
export default ProductInfo;

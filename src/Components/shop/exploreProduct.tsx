import { useState } from 'react';
import useShop from '../../Hooks/product/useShop';
import HandlePagination from './components/handlePagination';
// import FetchWeddingRing from './components/WeddingRings';

const ExploreProduct: React.FC = () => {
  const [page, setPage] = useState(1)
  const {data} = useShop(page)
  return (
    <>
        <div>
        <div>
        { data && [...Array(Math.ceil( data?.product.length / 5))].map((_, index) => (
            <FetchWeddingRing key={index} data={data?.product.slice(index * 5, (index + 1) * 5)} />
          ))}
        </div>
      </div>
      <HandlePagination page={page} setPage={setPage}/>
    </>
  );
};

export default ExploreProduct;

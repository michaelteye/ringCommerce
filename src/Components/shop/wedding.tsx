import { useState } from 'react';
import useShop from '../../Hooks/product/useShop';
import AllRings from './components/FetchAllRings';
import HandlePagination from './components/handlePagination';

const WeddingRing: React.FC = () => {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState<string>()
  const {data} = useShop(page)
 
  return (
    <>
        <div>
        <div>
        { data && [...Array(Math.ceil( data?.product.length / 5))].map((_, index) => (
            <AllRings key={index} data={data?.product.slice(index * 5, (index + 1) * 5)} />
          ))}
        </div>
      </div>
      <HandlePagination page={page} setPage={setPage}/>
    </>
  );
};

export default WeddingRing;

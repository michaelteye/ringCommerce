import React, { useState } from 'react'
import useShop from '../../Hooks/product/useShop'
import AllRings from './components/FetchAllRings'
import HandlePagination from './components/handlePagination'
const FetchAllRing = () => {

    const [page, setPage] = useState(1)
    const {data} = useShop(page)

  return (
    <React.Fragment>
        <div>
        <div>
        { data && [...Array(Math.ceil( data?.product.length / 5))].map((_, index) => (
            <AllRings key={index} data={data?.product.slice(index * 5, (index + 1) * 5)} />
          ))}
        </div>
      </div>
      <HandlePagination page={page} setPage={setPage}/>
    </React.Fragment>
  )
}

export default FetchAllRing
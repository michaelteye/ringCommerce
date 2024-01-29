import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'



const useShop = (page:number) => useQuery({
    queryKey: ['product', page],
    queryFn: ()=> axios.get(`https://mainsite-yqoe.onrender.com/api/products/all?page=${page}`).then((res)=>res.data),
    staleTime: 1,
    // keepPreviousData : true 
})
export default useShop

export const useShopSDetails = (product_id:any) => {
    return useQuery({
      queryKey: ['product_id', product_id],
      queryFn: () =>
        axios
          .get(`https://mainsite-yqoe.onrender.com/api/products/item/${product_id}`)
          .then((res) => res.data),
      staleTime: 1,
    });
  };
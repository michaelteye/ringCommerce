// useProductReview.js
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'
const useProductReview = (productId:any) => {
    return useQuery({
      queryKey: ['review', productId],
      queryFn: async () => {
        try {
          const response = await axios.get(`https://mainsite-yqoe.onrender.com/api/products/item/${productId}`)
          console.log('Response:', response.data);  // Add this log
          return response.data.reviews;
        }catch (error:any){
            console.log('the error is >>>',error)
          console.error('Error:', error.message);  // Add this log
          throw new Error(`Failed to fetch product review: ${error.message}`);
        }
      },
    });
};
export default useProductReview;

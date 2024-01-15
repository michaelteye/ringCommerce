import { Button } from '@material-tailwind/react';
import useShop from '../../../Hooks/product/useShop';

const HandlePagination = ({page,setPage}:any) => {
    // const [page, setPage] = useState(1)
    const {data} = useShop(page)


    const HandlePreviousPage = () => {
        console.log('the previous page number is given as >>>', page - 1);
        return setPage(page - 1);
      };
    
      const HandleNextPage = () => {
        console.log('the next page is given as', page + 1);
        return setPage(page + 1);
      };

  return(
    <div className="flex justify-center space-x-10  my-5">
    <Button
      onClick={HandlePreviousPage}
      disabled={page === 1}
      className="bg-blue-500"
    >
      Previous
    </Button>
    <Button
      onClick={HandleNextPage}
      disabled={data && data?.product.length < 20}
      className="bg-blue-500"
    >
      Next
    </Button>
  </div>

  )
}

export default HandlePagination
import { string } from 'yup';
import ProductSupport from './productSupport/support';

interface DetailProp{
  description:string;
  material:string;
  width:string;
  thickness:string;
}
const GetProductDetails = ({description,material,width,thickness}:DetailProp) => {
  
  return (
    <>
      <div className="pl-2">
        <p className="pt-1 pl-4 md:pl-[150px] md:mr-2 leading-[20px] pb-6 text-left pr-2">
          {description}
        </p>
      </div>
      <div className="flex">
        <p className="pl-6 md:pl-[150px] font-bold">Metal:</p>
        <p className="pl-6">{material}</p>
      </div>

      <div className="flex md:pl-[125px]">
        <p className="pl-6 font-bold">Width:</p>
        <p className="pl-6">{width}</p>
      </div>
      <div className="flex md:pl-[125px] mb-4 md:mb-10">
        <p className="pl-6 font-bold">Thickness:</p>
        <p className="pl-6">{thickness}</p>
      </div>
      <ProductSupport />
    </>
  );
};

export default GetProductDetails;

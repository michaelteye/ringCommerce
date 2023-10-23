import ProductSupport from "../Product/productSupport/support";

export default function Details() {
  return (
    <>
      <div className="pl-2">
        <p className="pt-1 pl-4 md:pl-[150px] md:mr-2 leading-[20px] pb-6 text-left pr-2">
          Monarch presents a slim, classic style for the professional. The
          tungsten carbide build faced with a rose gold rhombus plating ensures
          that Monarch is highly durable whilst retaining it's elegance -
          perfect for kings and queens alike. Tungsten carbide is one of the
          strongest compounds known. Our craftsmanship ensures a high-class
          composite that is extremely impact and scratch resistant, durable and
          hypoallergenic.
        </p>
      </div>
      <div className="flex">
        <p className="pl-6 md:pl-[150px] font-bold">Metal:</p>
        <p className="pl-6">Gold</p>
      </div>

      <div className="flex md:pl-[125px]">
        <p className="pl-6 font-bold">Width:</p>
        <p className="pl-6">4mm</p>
      </div>
      <div className="flex md:pl-[125px] mb-4 md:mb-10">
        <p className="pl-6 font-bold">Thickness:</p>
        <p className="pl-6">4mm</p>
      </div>

      <ProductSupport/>
    </>
  );
}

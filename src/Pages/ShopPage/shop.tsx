import { Layout } from "../../Components/Layout/Layout"
import AllSet from "../../Components/shop/AllRings"


export const Shop:React.FC =()=>{

    // const [activeProduct, setActiveProduct ] =useState('AllSet')

    // const handleActiveProduct = (product:any)=>{
    //     setActiveProduct(product)
    // }
  return (
    <Layout>
        <AllSet/>
    </Layout>
  )
}

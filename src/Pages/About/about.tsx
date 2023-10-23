import { Layout } from "../../Components/Layout/Layout";
import handcraft from '../../assets/images/handcraft.png'
import ProductSupport from "../../Components/Product/productSupport/support";
import SupportTypes from "../../Components/Product/productSupport/supportTypes";
import SpecialWork from "../../Components/special/specialwork";
import { Testimoney } from "../../Components/Testimoney/Testimoney";
import ExploreProduct from "../../Components/shop/exploreProduct";
import { GetInspired } from "../../Components/Inspired/getInspired";
function About() {
  return (
    <Layout>
      <>
      <div className="pt-[460px] pb-[80px] object-cover object-center" style={{
        backgroundImage:`url(${handcraft})`,
        backgroundPosition:'center',
        height:'25%'
        }}>
        <div>
          <p className="pl-10 leading-[66.42px] font-clash-display font-bold text-6xl">About Us</p>
        </div>
      </div>
      <div className="pt-[60px] pb-10">
        <ProductSupport/>
      </div>
      <div>
        <SupportTypes/>
      </div>
      <div className="ml-6">
      <SpecialWork/>
      </div>
      <div>
        <Testimoney />
      </div>
      <div>
        <ExploreProduct/>
      </div>
      <div>
        <GetInspired/>
      </div>
      </>
    </Layout>
  )

  
}

export default About;

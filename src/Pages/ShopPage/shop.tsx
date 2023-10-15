import { Layout } from "../../Components/Layout/Layout"
import AllSet from "../../Components/shop/AllRings"
import WeddingRing from "../../Components/shop/wedding"
import EngagementRing from "../../Components/shop/engagement"
import BridalSet from "../../Components/shop/BridalSet"
import EternalRing from "../../Components/shop/Eternal"
import {useState}  from 'react'

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

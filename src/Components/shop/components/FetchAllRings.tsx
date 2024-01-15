import React from 'react'
import { Link } from 'react-router-dom'
import SvgCircle from '../../icons/circle'
import SvgFavorite from '../../icons/favorite'
import { ProductData } from '../../types'

const AllRings:React.FC<ProductData> = ({data}) => {
  return (
    <>
    <div className="md:flex w-full justify-center grid grid-cols-2">
            {data &&
              data.map((card: any, index: number) => (
                <Link to={`/products/item/${card.id}`}>
                <div className="relative mx-2 my-4">
                  <img
                    src={card.images}
                    className="w-auto md:h-[40vh] "
                    alt={`Card ${index}`}
                  />
                  <SvgFavorite className="absolute top-2 right-2" />
                  <p>{card.name}</p>
                  <p className="flex">
                    <SvgCircle className="w-4 mx-1 my-1" />
                    <SvgCircle className="w-4 text-[#E0A65A] mx-1 my-1" />
                    <SvgCircle className="w-4 text-[#EAEAEA] mx-1 my-1" />
                  </p>
                  <p>₵ 2000</p>
                </div>
                </Link>

              ))}
          </div>
    </>
  )
}

export default AllRings
import { Carousel } from 'antd'
import React from 'react'

export interface Element {
  element: React.ReactNode
}

interface Props {
  carouselList: Element[]
}

const AppCarousel: React.FC<Props> = (props) => {
  return (
    <Carousel>
      {props?.carouselList?.map((item, index) => (
        <div key={index}>
          {item?.element}
        </div>
      ))}
    </Carousel>
  )
}

export default AppCarousel
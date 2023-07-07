import React from 'react'
import { SpaceType } from '../../../type'

interface Props {
  isBasketball?: boolean
  space: SpaceType
  imgSource: string
}

const AppImage: React.FC<Props> = (props) => {
  const { isBasketball, space, imgSource } = props

  const getHeightImage = () => {
    if (!space?.connection) {
      return '300px'
    } else {
      return `${space?.connection + space?.collaboration + space?.growth + space?.headline - (isBasketball ? 80 : 0)}px`
    }
  }

  return (
    <div className='image'>
      <div className='column'>
        <img
          src={imgSource}
          className={isBasketball ? 'image-basketball' : 'image-footballer'}
          style={{ height: getHeightImage() }}
        />
      </div>

      <div className='space-connection' style={{ height: `${space.connection + space?.headline}px` }} />
      <div className='space-collaboration' style={{ height: `${space.collaboration}px` }} />
      <div className={!isBasketball ? 'space-growth' : 'space-growth-dark'} style={{ height: `${space.growth}px` }} />
    </div>
  )
}

export default AppImage
import React, { useRef, useEffect, useState } from 'react'
import AppContent from './AppContent'
import ImgBasketball from '../../../assets/image/ImgBasketball.svg'
import { SpaceType } from '../../../type'
import AppDisplayImage from './AppImage'
import AppDisplayInfo from './AppDisplayInfo'
import AppDisplayInfoContainer from './AppInfoContainer'
import AppHeadline from './AppHeadline'
import AppCarousel, { Element } from './AppCarousel'

const connection = {
  title: 'CONNECTION',
  detail: 'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.'
}

const collaboration = {
  title: 'COLLABORATION',
  detail: 'Work with recruiter to increase your chances of finding talented athlete.'
}

const growth = {
  title: 'GROWTH',
  detail: 'Save your time, recruit proper athlets for your team.'
}

const initSpace: SpaceType = {
  connection: 0,
  collaboration: 0,
  growth: 0,
  headline: 0
}

const AppBasketball = () => {
  const connectionRef = useRef<HTMLDivElement>(null)
  const collaborationRef = useRef<HTMLDivElement>(null)
  const growthRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const [space, setSpace] = useState(initSpace)

  const carouselList: Element[] = [
    {
      element: <AppDisplayInfo
        visible
        title={connection.title}
        detail={connection.detail}
      />
    },
    {
      element: <AppDisplayInfo
        visible
        title={collaboration.title}
        detail={collaboration.detail}
      />
    },
    {
      element: <AppDisplayInfo
        visible
        title={growth.title}
        detail={growth.detail}
      />
    }
  ]

  useEffect(() => {

    const handleSetSpace = () => {
      setSpace({
        connection: connectionRef?.current?.clientHeight || 0,
        collaboration: collaborationRef?.current?.clientHeight || 0,
        growth: growthRef?.current?.clientHeight || 0,
        headline: headlineRef?.current?.clientHeight || 0
      })
    }

    handleSetSpace()
    window.addEventListener('resize', () => handleSetSpace())

  }, [])

  return (
    <AppContent withoutReverse>
      <AppDisplayInfoContainer>
        <AppHeadline
          horizontalEnd
          title='PLAYERS'
          elementRef={headlineRef}
        />
        <AppDisplayInfo
          isBasketball
          title={connection.title}
          detail={connection.detail}
          elementRef={connectionRef}
        />
        <AppDisplayInfo
          isBasketball
          title={collaboration.title}
          detail={collaboration.detail}
          elementRef={collaborationRef}
        />
        <AppDisplayInfo
          isBasketball
          title={growth.title}
          detail={growth.detail}
          elementRef={growthRef}
        />
      </AppDisplayInfoContainer>

      <AppDisplayImage
        isBasketball
        space={space}
        imgSource={ImgBasketball}
      />
      <AppCarousel carouselList={carouselList} />
      
    </AppContent>
  )
}

export default AppBasketball
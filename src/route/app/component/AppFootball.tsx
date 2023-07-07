import React, { useRef, useEffect, useState } from 'react'
import ImgFootballer from '../../../assets/image/ImgFootballer.svg'
import { SpaceType } from '../../../type'
import AppContent from './AppContent'
import AppDisplayImage from './AppImage'
import AppDisplayInfo from './AppDisplayInfo'
import AppDisplayInfoContainer from './AppInfoContainer'
import AppHeadline from './AppHeadline'
import AppCarousel, { Element } from './AppCarousel'

const connection = {
  title: 'CONNECTION',
  detail: 'Connect with coaches directly, you can ping coaches to view profile.'
}

const collaboration = {
  title: 'COLLABORATION',
  detail: 'Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.'
}

const growth = {
  title: 'GROWTH',
  detail: 'Resources and tools for you to get better as a student Athelte .Access to training classes, tutor sessions, etc'
}

const initSpace: SpaceType = {
  connection: 0,
  collaboration: 0,
  growth: 0,
  headline: 0
}

const AppFootball = () => {
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
    <AppContent>

      <AppCarousel carouselList={carouselList} />
      <AppDisplayImage
        space={space}
        imgSource={ImgFootballer}
      />

      <AppDisplayInfoContainer>
        <AppHeadline
          title='ATHLETS'
          elementRef={headlineRef}
        />
        <AppDisplayInfo
          title={connection.title}
          detail={connection.detail}
          elementRef={connectionRef}
        />
        <AppDisplayInfo
          title={collaboration.title}
          detail={collaboration.detail}
          elementRef={collaborationRef}
        />
        <AppDisplayInfo
          title={growth.title}
          detail={growth.detail}
          elementRef={growthRef}
        />
      </AppDisplayInfoContainer>
      
    </AppContent >
  )
}

export default AppFootball
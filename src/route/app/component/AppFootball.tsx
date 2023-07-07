import React, { useRef, useEffect, useState } from 'react'
import ImgFootballer from '../../../assets/image/ImgFootballer.svg'
import { SpaceType } from '../../../type'
import AppContent from './AppContent'
import AppDisplayImage from './AppImage'
import AppDisplayInfo from './AppDisplayInfo'
import AppDisplayInfoContainer from './AppInfoContainer'
import AppHeadline from './AppHeadline'
import AppCarousel, { Element } from './AppCarousel'
import { FootballDTO } from '../../../model/Football.dto'
import AppFlatlistDisplayInfo from './AppFlatlistDisplayInfo'

const data: FootballDTO[] = [
  {
    title: 'CONNECTION',
    detail: 'Connect with coaches directly, you can ping coaches to view profile.'
  },
  {
    title: 'COLLABORATION',
    detail: 'Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.'
  },
  {
    title: 'GROWTH',
    detail: 'Resources and tools for you to get better as a student Athelte .Access to training classes, tutor sessions, etc'
  }
]

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
  const [carouselList, setCarouselList] = useState<Element[]>([])

  const chooseRef = (key: string) => {
    switch (key) {
      case 'CONNECTION':
        return connectionRef

      case 'COLLABORATION':
        return collaborationRef

      case 'GROWTH':
        return growthRef
    }
  }

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

  // init CarouselList
  useEffect(() => {
    setCarouselList(() => {
      return data?.map((item, index) => ({
        element: <AppDisplayInfo
          visible
          title={item.title}
          detail={item.detail}
          titleNumber={`0${index + 1}`}
        />
      }))
    })

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
        <AppFlatlistDisplayInfo
          data={data}
          renderItem={(item, index) => (
            <AppDisplayInfo
              key={index}
              title={item.title}
              detail={item.detail}
              titleNumber={`0${index + 1}`}
              elementRef={chooseRef(item?.title)}
            />
          )}
        />
      </AppDisplayInfoContainer>
    </AppContent >
  )
}

export default AppFootball
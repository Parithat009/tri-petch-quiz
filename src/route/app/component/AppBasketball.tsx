import React, { useRef, useEffect, useState } from 'react'
import AppContent from './AppContent'
import ImgBasketball from '../../../assets/image/ImgBasketball.svg'
import { SpaceType } from '../../../type'
import AppDisplayImage from './AppImage'
import AppDisplayInfo from './AppDisplayInfo'
import AppDisplayInfoContainer from './AppInfoContainer'
import AppHeadline from './AppHeadline'
import AppCarousel, { Element } from './AppCarousel'
import AppFlatlistDisplayInfo from './AppFlatlistDisplayInfo'
import { FootballDTO } from '../../../model/Football.dto'

const data: FootballDTO[] = [
  {
    title: 'CONNECTION',
    detail: 'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.'
  },
  {
    title: 'COLLABORATION',
    detail: 'Work with recruiter to increase your chances of finding talented athlete.'
  },
  {
    title: 'GROWTH',
    detail: 'Save your time, recruit proper athlets for your team.'
  }
]

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
    <AppContent withoutReverse>
      <AppDisplayInfoContainer>
        <AppHeadline
          horizontalEnd
          title='PLAYERS'
          elementRef={headlineRef}
        />
        <AppFlatlistDisplayInfo
          data={data}
          renderItem={(item, index) => (
            <AppDisplayInfo
              isBasketball
              key={index}
              title={item.title}
              detail={item.detail}
              titleNumber={`0${index + 1}`}
              elementRef={chooseRef(item?.title)}
            />
          )}
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
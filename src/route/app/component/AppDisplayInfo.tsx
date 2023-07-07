import React, { useMemo } from 'react'

interface Props {
  isBasketball?: boolean
  titleNumber: string
  title: string
  detail: string
  visible?: boolean
  elementRef?: React.RefObject<HTMLDivElement>
}

const AppDisplayInfo: React.FC<Props> = (props) => {
  const { title, titleNumber, detail, visible, isBasketball, elementRef } = props
  const condGrowth = title === 'GROWTH'

  const containerStyle = useMemo(() => {
    switch (title) {
      case 'CONNECTION':
        return `space-connection ${visible && '-visible'}`

      case 'COLLABORATION':
        return `space-collaboration ${visible && '-visible'}`

      case 'GROWTH':
        if (isBasketball)
          return `space-growth-dark ${visible && '-visible'}`
        else
          return `space-growth ${visible && '-visible'}`

      default:
        return ''
    }

  }, [title, visible, isBasketball])

  const textDetailStyle = useMemo(() => {
    switch (title) {
      case 'CONNECTION':
      case 'COLLABORATION':
        return 'text-detail'

      case 'GROWTH':
        if (visible)
          return 'text-detail'
        else
          return 'text-detail -color-white'

      default:
        return ''
    }

  }, [title, visible])

  return (
    <div className={containerStyle} ref={elementRef && elementRef}>
      <div className={`row ${isBasketball && '-horizontal-end'}`}>
        <div className='column'>

          <div className='title-container'>
            <div className='title-content'>
              <label className={`title-number ${(condGrowth && isBasketball) && '-color-primary'}`}>
                {titleNumber}
              </label>
              <div className={`title-underline ${condGrowth && '-color-white'}`} />
            </div>

            <h2 className='text-title'>
              {title}
            </h2>
          </div>

          <label className={textDetailStyle}>
            {detail}
          </label>
        </div>
      </div>
    </div>
  )
}

export default AppDisplayInfo
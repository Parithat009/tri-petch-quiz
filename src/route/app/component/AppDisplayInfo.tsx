import React, { useMemo } from 'react'

interface Props {
  isBasketball?: boolean
  title: string
  detail: string
  visible?: boolean
  elementRef?: React.RefObject<HTMLDivElement>
}

const AppDisplayInfo: React.FC<Props> = (props) => {
  const { title, detail, visible, isBasketball, elementRef } = props

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
          <h2 className='text-title'>
            {title}
          </h2>

          <label className={textDetailStyle}>
            {detail}
          </label>
        </div>
      </div>
    </div>
  )
}

export default AppDisplayInfo
import React from 'react'

interface Props {
  title: string
  horizontalEnd?: boolean
  elementRef: React.RefObject<HTMLDivElement>
}

const AppHeadline: React.FC<Props> = (props) => {
  const { title, horizontalEnd, elementRef } = props

  return (
    <div className={'space-headline'} ref={elementRef}>
      <div className={`row ${horizontalEnd && '-horizontal-end'}`}>
        <div className='column'>
          <h1 className='text-headline'>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default AppHeadline
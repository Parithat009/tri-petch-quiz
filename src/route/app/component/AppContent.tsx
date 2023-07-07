import React from 'react'

interface Props {
  withoutReverse?: boolean
  children: React.ReactNode
}

const LayoutContent: React.FC<Props> = (props) => {
  return (
    <div className={`content ${props?.withoutReverse && 'not-reverse'}`}>
      {props?.children}
    </div>
  )
}

export default LayoutContent
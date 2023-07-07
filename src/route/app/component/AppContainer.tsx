import React from 'react'

const LayoutContainer = (props) => {
  return (
    <div className='container'>
      {props?.children}
    </div>
  )
}

export default LayoutContainer
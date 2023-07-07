import React from 'react'
import AppContainer from './component/AppContainer'
import AppFootball from './component/AppFootball'
import AppBasketball from './component/AppBasketball'

const AppViewPage = () => {
  return (
    <AppContainer>
      <AppFootball />
      <AppBasketball />
    </AppContainer>
  )
}

export default AppViewPage
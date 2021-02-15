import React from 'react'
import HeaderArea from './Components/Layout/HeaderArea'
import PageArea from './Components/Layout/PagesArea'
import FooterArea from './Components/Layout/FooterArea'

import { Background } from './Styles/Globals/Global.Styles'
import './SASS/AppStyles.scss'

const App = () => {
  return (
    <div style={ Background }>
      <HeaderArea />
      <PageArea />
      <FooterArea />
    </div>
  )
}

export default App

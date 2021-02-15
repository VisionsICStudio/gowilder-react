/*
; =======================================================
; Title: HomePage.jsx - GoWilderApp - Root folder 
; Authors: Aaron Wilson
; Instructor: Sean Bernath
; Date: 08 February 2021
; Description: Build out app's  PagesArea.jsx file.
; Legend: [ Aaron Wilson ] -> Team member responsible
; for page.
; =======================================================
*/

import React from 'react'
import QuoteBox from '../UI/QuoteBox'
import { Jumbotron } from 'reactstrap'

const HomePage = () => {

  return (
    <>
      
      <Jumbotron>
        <QuoteBox />
      </Jumbotron>

    </>
  )
}

export default HomePage
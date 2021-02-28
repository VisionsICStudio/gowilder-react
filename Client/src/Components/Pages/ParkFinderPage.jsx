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
import { Form } from 'react-bootstrap'

export const ParkFinderPage = () => {

  return (
    <>
      <Form.Group>
        <Form.Control as="select" size="lg">
          <option>Large select</option>
        </Form.Control>
      </Form.Group>
    </>
  )
}

export default ParkFinderPage

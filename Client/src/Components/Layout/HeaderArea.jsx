/*
; =======================================================
; Title: HeaderArea.jsx - GoWilderApp0 - layout folder 
; Authors: Aaron Wilson
; Instructor: Sean Bernath
; Date: 08 February 2021
; Description: Build out app's HeaderArea component.
; Legend: [ Aaron Wilson ] -> Team member responsible
; for page.
; =======================================================
*/

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import HeaderMenu from './HeaderMenu'

const HeaderArea = () => {

    return (
      <>
        <Container fluid={ true }>
          <Row>
            <Col>
              <header>
                <HeaderMenu />
              </header>
            </Col>
          </Row>
        </Container>
      </>
    )
  }

export default HeaderArea

/*
; =======================================================
; Title: .jsx - GoWilderApp - Root folder 
; Authors: Aaron Wilson
; Instructor: Sean Bernath
; Date: 08 February 2021
; Description: Build out app's  jsx file.
; Legend: [ Aaron Wilson ] -> Team member responsible
; for page.
; =======================================================
*/
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import FooterMenu from './FooterMenu'

export const FooterArea = () => {

    return (
      <>
        <Container fluid={ true }>
          <Row>
            <Col>
              <footer>
                <FooterMenu />
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )
  }

  export default FooterArea
  
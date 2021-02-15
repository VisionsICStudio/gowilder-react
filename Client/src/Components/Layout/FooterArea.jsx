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
import { footerStyle } from '../../Styles/Layout/FooterAea.Styles'

const FooterArea = () => {

    return (
      <>
        <footer style={ footerStyle }>
          <Container fluid>
            <Row>
              <Col>
                <small> &copy; Copyright 2021, Full Sail Project </small>
              </Col>
              <Col>
                <FooterMenu />
              </Col>
            </Row> 
          </Container>
        </footer>
      </>
    )
  }

export default FooterArea

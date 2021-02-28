/*
; =======================================================
; Title: AboutPage.jsx - GoWilderApp - Root folder 
; Authors: Aaron Wilson
; Instructor: Sean Bernath
; Date: 08 February 2021
; Description: Build out app's  PagesArea.jsx file.
; Legend: [ Aaron Wilson ] -> Team member responsible
; for page.
; =======================================================
*/

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Figure from 'react-bootstrap/Figure'
import { aboutHeaderStyle, aboutHeaderTitleStyle, aboutRuleStyle, aboutImgStyle, aboutCaptionStyle, aboutTextStyle } from '../../Styles/Pages/AboutPage.Styles'
import Image from './Webp/tree-about.webp'

export const AboutPage = () => {

  return (
    <>
      <Container>
        <Row style={ aboutHeaderStyle } xl="12">
          <h2 style={ aboutHeaderTitleStyle } class="text-white text-uppercase text-left mt-3">About GoWilder</h2>
          <hr style={ aboutRuleStyle } class="mb-4" />
        </Row>
        <Row xl="12">
          <Col>
            <Figure className="col-12 text-success">
              <Figure.Image src={ Image } style={ aboutImgStyle } alt="man in big tree"/>
              <Figure.Caption style={ aboutCaptionStyle } className="mb-3">
              This is an image shot from our sponsored location.
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row xl="12">
          <Col xl="6">
            <p style={ aboutTextStyle } className="text-white">
              GoWilder is a travel booking company that specializes in arranging both travel and stay accommodations for families, groups, 
              or individuals looking to enjoy the outdoor sporting experience. Founded in 1963, GoWilder has been a very reputable travel
              firm in practice for over 55 years of travel knowledge ad experience in their repertoire. With that kind of expertise in their
              respective field, it goes without saying that GoWilder has clear stronghold on the outdoor travel market.
            </p>
          </Col>
          <Col xl="6">
            <p style={ aboutTextStyle } className="text-white">
              GoWilder has built upon both their wealth of knowledge and reputation in the outdoor sporting travel industry. But, it is also 
              GoWilder's innovative vision towards the future that continues to make GoWilder the premier company of choice to handle any 
              travelers total accommodations needs. It is those partnerships with a majority of the park systems through the world, and the
              ability of GoWilder to utilize their network of connections to deliver whatever accommodations a traveler, or travel group of any 
              variety may need.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutPage

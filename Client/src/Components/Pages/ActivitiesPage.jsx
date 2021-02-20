/*
; =======================================================
; Title: ActivitiesPage.jsx - GoWilderApp - Root folder 
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
import Card from 'react-bootstrap/Card'

import { 
  activitiesHeaderStyle, 
  activitiesHeaderTitleStyle, 
  activitiesRuleStyle, 
  activitiesSVGStyle,
  activitiesCardStyle, 
  activitiesTitleStyle, 
  activitiesTitleRuleStyle,
  activitiesBodyStyle, 
  activitiesTextStyle } from '../../Styles/Pages/ActivitiesPage.Styles'

import Camping from '../../SVG/icons/activities-camping.svg'
import Hiking from '../../SVG/icons/activities-hiking.svg'
import Climbing from '../../SVG/icons/activities-climbing.svg'
import Fishing from '../../SVG/icons/activities-fishing.svg'
import Rafting from '../../SVG/icons/activities-rafting.svg'
import Hunting from '../../SVG/icons/activities-hunting.svg'

const HomePage = () => {

  return (
    <>
      <Container>
        <Row style={ activitiesHeaderStyle } xl="12">
          <h2 style={ activitiesHeaderTitleStyle } class="text-white text-uppercase text-left mt-3">Activities</h2>
          <hr style={ activitiesRuleStyle } class="mb-4" />
        </Row>
        <Row>
          <Col xl="2">
            <Figure>
              <Figure.Image style={ activitiesSVGStyle } className="mt-3 mb-4" src={ Camping } />
            </Figure>
            <Card style={ activitiesCardStyle }>
              <Card.Title style={ activitiesTitleStyle } className="ml-3"> Camping </Card.Title>
              <hr style={ activitiesTitleRuleStyle } />
              <Card.Body style={ activitiesBodyStyle }>
                <p class="text-white">
                This activity is common place at most of our locations. Although, there are variables as to what is
                offered in particular. For instance, the majority of our hosted locations offer primitive camp sites.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="2">
            <Figure>
              <Figure.Image style={ activitiesSVGStyle } className="mt-3 mb-4" src={ Hiking } />
            </Figure>
            <Card style={ activitiesCardStyle }>
              <Card.Title style={ activitiesTitleStyle } className="ml-3"> Hiking </Card.Title>
              <hr style={ activitiesTitleRuleStyle }/>
              <Card.Body style={ activitiesBodyStyle }>
                <p class="text-white">
                Most of our hosted sites or locations have hiking trails onsite. With these amazing paths to blaze 
                that make their way winding through breath-taking views of pristine landscape.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="2">
            <Figure>
              <Figure.Image style={ activitiesSVGStyle } className="mt-3 mb-4" src={ Climbing } />
            </Figure>
            <Card style={ activitiesCardStyle }>
              <Card.Title style={ activitiesTitleStyle } className="ml-3"> Climbing </Card.Title>
              <hr style={ activitiesTitleRuleStyle } />
              <Card.Body style={ activitiesBodyStyle } >
                <p class="text-white">
                This activity is for those outdoor enthusiasts that have a skilled background in climbing. Not all our sponsored
                locations feature climbing capabilities. Of those of our sites that do feature rock climbing.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="2">
            <Figure>
              <Figure.Image style={ activitiesSVGStyle } className="mt-3 mb-4" src={ Fishing } />
            </Figure>
            <Card style={ activitiesCardStyle }>
              <Card.Title style={ activitiesTitleStyle } className="ml-3"> Fishing </Card.Title>
              <hr style={ activitiesTitleRuleStyle } />
              <Card.Body style={ activitiesBodyStyle } >
                <p class="text-white">
                All GoWilder sponsored locations feature fishing as an activity on the outdoor recreational menu. Our locations are of 
                some of the most picturesque spots in the world. Come hook some Bass, Trout, Catfish, or Sonny.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="2">
            <Figure>
              <Figure.Image style={ activitiesSVGStyle } className="mt-3 mb-4" src={ Rafting } />
            </Figure>
            <Card style={ activitiesCardStyle }>
              <Card.Title style={ activitiesTitleStyle } className="ml-3"> Rafting </Card.Title>
              <hr style={ activitiesTitleRuleStyle } />
              <Card.Body>
                <p style={ activitiesTextStyle } class="text-white">
                In select locations of a GoWilder sponsored travel destination, we offer world class white water rafting. Every traveler
                must be aware that this type of rafting can be a very challenging experience.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="2">
            <Figure>
              <Figure.Image style={ activitiesSVGStyle } className="mt-3 mb-4" src={ Hunting } />
            </Figure>
            <Card style={ activitiesCardStyle }>
              <Card.Title style={ activitiesTitleStyle } className="ml-3"> Hunting </Card.Title>
              <hr style={ activitiesTitleRuleStyle } />
              <Card.Body>
                <p style={ activitiesTextStyle } class="text-white">
                At select sights in the arsenal of GoWilder excursions, trips, or vacation stays, we offer hunting as one of the many top
                shelf activities that GoWilder has in store for you when you choose a premium package.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage
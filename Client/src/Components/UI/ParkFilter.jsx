

import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import ByName from './ByName'
import ByState from './ByState'
import ByPopularity from './ByPopularity'
import { filterNavbarStyle, byButtonUpStyle, byButtonSelectedStyle } from '../../Styles/UI/ParkFilter.Styles'

export const ParkFilter = () => {

  const [ selected, setSelected ] = useState(false)
  const [ selectedName, setNameChoice ] = useState( 'ch' )
  const [ selectedState, setStateChoice ] = useState( 'ch' )
  const [ selectedPopularity, setPopularityChoice ] = useState( 'ch' )

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Navbar style={ filterNavbarStyle }>
              <Nav justify variant="pills">
                <Nav.Item>
                  <Nav.Link href="/parks/by-name" disabled>
                    By Park
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={ selected === true ? byButtonSelectedStyle : byButtonUpStyle } href="/parks/by-state" onClick={ () => setSelected( true ) } value={ selected }>
                    By State
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={ selected === true ? byButtonSelectedStyle : byButtonUpStyle } href="/parks/by-popularity" onClick={ () => setSelected( true ) } value={ selected }>
                    By Popularity
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>

      <BrowserRouter>
        <Switch>
          <Route path="/parks/by-name">
            <ByName currentName={ selectedName } onNameChange={ setNameChoice } />
          </Route>
          <Route path="/parks/by-state">
            <ByState currentState={ selectedState } onStateChange={ setStateChoice } />
          </Route>
          <Route path="/parks/by-popularity">
            <ByPopularity currentPopularity={ selectedPopularity } onPopularityChange={ setPopularityChoice } />
          </Route>
        </Switch>
    </BrowserRouter>
    </>
  )
}

export default ParkFilter

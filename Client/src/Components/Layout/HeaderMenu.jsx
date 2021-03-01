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

import React, { useState } from 'react'
import { useLocation, withRouter } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Container, Row, Col } from 'react-bootstrap'
import { Logo } from '../../Styles/Layout/HeaderArea.Styles'
import { navLinkStyle } from '../../Styles/Layout/HeaderMenu.Styles'

export const HeaderMenu = (props, history) => {

  const urlLocation = useLocation();

  if(urlLocation.pathname === '/parks' || urlLocation.pathname !== ( 
    '/' || '/packages' || '/locations' || '/activities' || '/about' || '/contact' || '/sitemap')) {

    return (
      <>
        <Navbar bg="light" expand="xl" fixed="top">
          <Navbar.Brand style={ Logo } href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <div>
                <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  By State
                </button>
                <ul className="dropdown-menu">
                  <Container fluid>
                    <Row xl="12">
                      <Col value="states-1">
                        <li><a className="dropdown-item" href="/alabama" value="al">Alabama</a></li>
                        <li><a className="dropdown-item" href="/alaska" value="ak">Alaska</a></li>
                        <li><a className="dropdown-item" href="/arizona" value="az">Arizona</a></li>
                        <li><a className="dropdown-item" href="/arkansas" value="ar">Arkansas</a></li>
                        <li><a className="dropdown-item" href="/california" value="ca">California</a></li>
                        <li><a className="dropdown-item" href="/colorado" value="co">Colorado</a></li>
                        <li><a className="dropdown-item" href="/connecticut" value="ct">Connecticut</a></li>
                        <li><a className="dropdown-item" href="/delaware" value="de">Delaware</a></li>
                        <li><a className="dropdown-item" href="/florida" value="fl">Florida</a></li>
                        <li><a className="dropdown-item" href="/georgia" value="ga">Georgia</a></li>
                      </Col>
                      <Col value="states-2">
                        <li><a className="dropdown-item" href="/hawaii" value="hi">Hawaii</a></li>
                        <li><a className="dropdown-item" href="/idaho" value="id">Idaho</a></li>
                        <li><a className="dropdown-item" href="/illinois" value="il">Illinois</a></li>
                        <li><a className="dropdown-item" href="/indiana" value="in">Indiana</a></li>
                        <li><a className="dropdown-item" href="/iowa" value="ia">Iowa</a></li>
                        <li><a className="dropdown-item" href="/kansas" value="ks">Kansas</a></li>
                        <li><a className="dropdown-item" href="/kentucky" value="ky">Kentucky</a></li>
                        <li><a className="dropdown-item" href="/louisiana" value="la">Louisiana</a></li>
                        <li><a className="dropdown-item" href="/maine" value="me">Maine</a></li>
                        <li><a className="dropdown-item" href="/maryland" value="md">Maryland</a></li>
                      </Col>
                      <Col value="states-3">
                        <li><a className="dropdown-item" href="/massachusetts" value="ma">Massachusetts</a></li>
                        <li><a className="dropdown-item" href="/michigan" value="mi">Michigan</a></li>
                        <li><a className="dropdown-item" href="/minnesota" value="mn">Minnesota</a></li>
                        <li><a className="dropdown-item" href="/mississippi" value="ms">Mississippi</a></li>
                        <li><a className="dropdown-item" href="/missouri" value="mo">Missouri</a></li>
                        <li><a className="dropdown-item" href="/montana" value="mt">Montana</a></li>
                        <li><a className="dropdown-item" href="/nebraska" value="ne">Nebraska</a></li>
                        <li><a className="dropdown-item" href="/nevada" value="nv">Nevada</a></li>
                        <li><a className="dropdown-item" href="/new-hampshire" value="nh">New Hampshire</a></li>
                        <li><a className="dropdown-item" href="/new-jersey" value="nj">New Jersey</a></li>
                      </Col>
                      <Col value="states-4">
                        <li><a className="dropdown-item" href="/new-mexico" value="nm">New Mexico</a></li>
                        <li><a className="dropdown-item" href="/new-york" value="ny">New York</a></li>
                        <li><a className="dropdown-item" href="/north-carolina" value="nc">North Carolina</a></li>
                        <li><a className="dropdown-item" href="/north-dakota" value="nd">North Dakota</a></li>
                        <li><a className="dropdown-item" href="/ohio" value="oh">Ohio</a></li>
                        <li><a className="dropdown-item" href="/oklahoma" value="ok">Oklahoma</a></li>
                        <li><a className="dropdown-item" href="/oregon" value="or">Oregon</a></li>
                        <li><a className="dropdown-item" href="/pennsylvania" value="pa">Pennsylvania</a></li>
                        <li><a className="dropdown-item" href="/rhode-island" value="ri">Rhode Island</a></li>
                        <li><a className="dropdown-item" href="/south-carolina" value="sc">South Carolina</a></li>
                      </Col>
                      <Col value="states-5">
                        <li><a className="dropdown-item" href="/south-dakota" value="sd">South Dakota</a></li>
                        <li><a className="dropdown-item" href="/tennessee" value="tn">Tennessee</a></li>
                        <li><a className="dropdown-item" href="/texas" value="tx">Texas</a></li>
                        <li><a className="dropdown-item" href="/utah" value="ut">Utah</a></li>
                        <li><a className="dropdown-item" href="/vermont" value="vt">Vermont</a></li>
                        <li><a className="dropdown-item" href="/virginia" value="va">Virginia</a></li>
                        <li><a className="dropdown-item" href="/washington" value="wa">Washington</a></li>
                        <li><a className="dropdown-item" href="/west-virginia" value="wv">West Virginia</a></li>
                        <li><a className="dropdown-item" href="/wisconsin" value="wi">Wisconsin</a></li>
                        <li><a className="dropdown-item" href="/wyoming" value="wy">Wyoming</a></li>
                      </Col>
                    </Row>
                  </Container>
                </ul>
                <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  By Popularity
                </button>
                <ul class="dropdown-menu">
                  <Container fluid>
                    <Row xl="12">
                      <Col value="popularity-1">
                        <li><a className="dropdown-item" href="/yell" value="yell">Yellowstone National Park</a></li>
                        <li><a className="dropdown-item" href="/moru" value="moru">Mount Rushmore National Memorial Park</a></li>
                        <li><a className="dropdown-item" href="/grca" value="grca">Grand Canyon National Park</a></li>
                        <li><a className="dropdown-item" href="/yose" value="yose">Yosemite National Park</a></li>
                        <li><a className="dropdown-item" href="/glac" value="glac">Glacier National Park</a></li>
                      </Col>
                      <Col value="popularity-2">
                        <li><a className="dropdown-item" href="/hale" value="hale">Haleakala National Park</a></li>
                        <li><a className="dropdown-item" href="/arch" value="arch">Arches National Park</a></li>
                        <li><a className="dropdown-item" href="/caco" value="caco">Cape Cod National Seashore Park</a></li>
                        <li><a className="dropdown-item" href="/alca" value="alca">Alcatraz Island National Park</a></li>
                        <li><a className="dropdown-item" href="/goga" value="goga">Golden Gate National Recreational Park</a></li>
                      </Col>
                    </Row>
                  </Container>
                </ul>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }

  return (
    <>()
      <Navbar bg="light" expand="xl" fixed="top">
        <Navbar.Brand style={ Logo } href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link style={ navLinkStyle } href="/"><strong>Home</strong><span className="sr-only">(current)</span></Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about"><strong>About GoWilder</strong></NavDropdown.Item>
              <NavDropdown.Item href="/activities"><strong>Activities</strong></NavDropdown.Item>
              <NavDropdown.Item href="/locations"><strong>Top Locations</strong></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={ navLinkStyle } href="/packages"><strong>Packages</strong></Nav.Link>
            <Nav.Link style={ navLinkStyle } href="/parks"><strong>Find Parks</strong></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default withRouter(HeaderMenu)

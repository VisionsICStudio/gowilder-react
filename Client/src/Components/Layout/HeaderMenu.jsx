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
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Logo } from '../../Styles/Layout/HeaderArea.Styles'
import { navLinkStyle } from '../../Styles/Layout/HeaderMenu.Styles'

const HeaderMenu = () => {
  return (
    <>
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
            <Nav.Link style={ navLinkStyle } href="/register"><strong>Register</strong></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default HeaderMenu

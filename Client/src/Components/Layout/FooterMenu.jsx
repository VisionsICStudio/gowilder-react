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
import { Navbar, Nav } from 'react-bootstrap'
import { navbarStyle, copyrightStyle, navLinkStyle } from '../../Styles/Layout/FooterMenu.Styles'

const FooterMenu = () => {

  return (
    <>
      <Navbar expand="xl" fixed="bottom" style={ navbarStyle }>
        <Navbar.Brand style={ copyrightStyle } href="#">
          <small> &copy; Copyright 2021, GoWilder Full Sail Project </small>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link style={ navLinkStyle } href="#">Contact</Nav.Link>
          <Nav.Link style={ navLinkStyle } href="#">Sitemap</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )  
}

export default FooterMenu
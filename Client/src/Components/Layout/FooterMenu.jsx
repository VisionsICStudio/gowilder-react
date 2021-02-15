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
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap'
import { footerStyle } from '../../Styles/Layout/FooterAea.Styles'
import { navLinkStyle } from '../../Styles/Layout/FooterMenu.Styles'

const FooterMenu = () => {

  return (
    <>
      <Navbar style={ footerStyle } dark expand="xl">
          <Nav navbar>
            <NavItem>
              <NavLink style={ navLinkStyle } href="">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={ navLinkStyle } href="">Sitemap</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
    </>
  )  
}

export default FooterMenu
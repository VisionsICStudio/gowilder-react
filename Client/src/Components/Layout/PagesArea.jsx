/*
; =======================================================
; Title: PagesArea.jsx - GoWilderApp - Root folder 
; Authors: Aaron Wilson
; Instructor: Sean Bernath
; Date: 08 February 2021
; Description: Build out app's  PagesArea.jsx file.
; Legend: [ Aaron Wilson ] -> Team member responsible
; for page.
; =======================================================
*/

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AboutPage from '../Pages/AboutPage'
import ActivitiesPage from '../Pages/ActivitiesPage'
import ContactPage from '../Pages/ContactPage'
import HomePage from '../Pages/HomePage'
import LocationsPage from '../Pages/LocationsPage'
import PackagesPage from '../Pages/PackagesPage'
import RegisterPage from '../Pages/RegisterPage'
import SiteMapPage from '../Pages/SiteMapPage'

const PagesArea = () => {

  return (
    <BrowserRouter>
        <Switch>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/packages">
            <PackagesPage />
          </Route>
          <Route path="/activities">
            <ActivitiesPage />
          </Route>
          <Route path="/locations">
            <LocationsPage />
          </Route>
          <Route path="/sitemap">
            <SiteMapPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default PagesArea
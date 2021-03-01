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

import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Fade, useLocation } from 'react-router-dom'
import AboutPage from '../Pages/AboutPage'
import ActivitiesPage from '../Pages/ActivitiesPage'
import ContactPage from '../Pages/ContactPage'
import HomePage from '../Pages/HomePage'
import LocationsPage from '../Pages/LocationsPage'
import PackagesPage from '../Pages/PackagesPage'
import RegisterPage from '../Pages/RegisterPage'
import FindParksPage from '../Pages/ParksAPIPage'
import SiteMapPage from '../Pages/SiteMapPage'
import ParksAPIPage from '../Pages/ParksAPIPage'
import NPAPI from '../API/NPAPI'

export const PagesArea = (props) => {

  const [ stateObj, setStateObj ]  = useState({ stateUrl: '', stateValue: '' })
  const [ popularityObj, setPopularityObj ]  = useState({ popularityUrl: '', popularityValue: '' })
    
  const STATES = [

    { url: '/parks/alabama', value: 'al' },
    { url: '/parks/alaska', value: 'ak' },
    { url: '/parks/arizona', value: 'az' },
    { url: '/parks/arkansas', value: 'ar' },
    { url: '/parks/california', value: 'ca' },
    { url: '/parks/colorado', value: 'co' },
    { url: '/parks/connecticut', value: 'ct' },
    { url: '/parks/delaware', value: 'de' },
    { url: '/parks/florida', value: 'fl' },
    { url: '/parks/georgia', value: 'ga' },
    { url: '/parks/hawaii', value: 'hi' },
    { url: '/parks/idaho', value: 'id' },
    { url: '/parks/illinois', value: 'il' },
    { url: '/parks/indiana', value: 'in' },
    { url: '/parks/iowa', value: 'ia' },
    { url: '/parks/kansas', value: 'ks' },
    { url: '/parks/kentucky', value: 'ky' },
    { url: '/parks/kouisiana', value: 'la' },
    { url: '/parks/maine', value: 'me' },
    { url: '/parks/maryland', value: 'md' },
    { url: '/parks/massachusetts', value: 'ma' },
    { url: '/parks/michigan', value: 'mi' },
    { url: '/parks/minnesota', value: 'mn' },
    { url: '/parks/mississippi', value: 'ms' },
    { url: '/parks/missouri', value: 'mo' },
    { url: '/parks/montana', value: 'mt' },
    { url: '/parks/nebraska', value: 'ne' },
    { url: '/parks/nevada', value: 'nv' },
    { url: '/parks/new-hampshire', value: 'nh' },
    { url: '/parks/new-jersey', value: 'nj' },
    { url: '/parks/new-mexico', value: 'nm' },
    { url: '/parks/new-york', value: 'ny'},
    { url: '/parks/north-carolina', value: 'nc' },
    { url: '/parks/north-dakota', value: 'nd' },
    { url: '/parks/ohio', value: 'oh' },
    { url: '/parks/oklahoma', value: 'ok' },
    { url: '/parks/oregon', value: 'or' },
    { url: '/parks/pennsylvania', value: 'pa' },
    { url: '/parks/rhode-island', value: 'ri' },
    { url: '/parks/south-carolina', value: 'sc' },
    { url: '/parks/south-dakota', value: 'sd' },
    { url: '/parks/tennessee', value: 'tn' },
    { url: '/parks/texas', value: 'tx' },
    { url: '/parks/utah', value: 'ut' },
    { url: '/parks/vermont', value: 'vt' },
    { url: '/parks/virginia', value: 'va' },
    { url: '/parks/washington', value: 'wa' },
    { url: '/parks/west-virginia', value: 'wv' },
    { url: '/parks/wisconsin', value: 'wi' },
    { url: '/parks/wyoming', value: 'wy' }
  ]

  const POPULARITY = [
    { url: '/yell', value: 'yell' },
    { url: '/moru', value: 'moru' },
    { url: '/grca', value: 'grca' },
    { url: '/yose', value: 'yose' },
    { url: '/glac', value: 'glac' },
    { url: '/hale', value: 'hale' },
    { url: '/arch', value: 'arch' },
    { url: '/caco', value: 'caco' },
    { url: '/alca', value: 'alca' },
    { url: '/goga', value: 'goga' }
  ]

  const urlLocation = useLocation();

  stateObj = STATES.map( it => {
    if(urlLocation.pathname === it.url) {
      return setStateObj({
        stateUrl: it.url,
        stateValue: it.value
      })
    }
  })

  popularityObj = POPULARITY.map( i => {
    if(urlLocation.pathname === i.url) {
      return setPopularityObj({
        popularityUrl: i.url,
        popularityValue: i.value
      })
    }
  })

  return (
    <BrowserRouter>
      <Fade>
        <Switch>
          <Route path="/np-api">
            <NPAPI />
          </Route>
          <Route path={ stateObj.stateUrl }>
            <ParksAPIPage stateAPIValue={ stateObj.stateValue } />
          </Route>
          <Route path={ popularityObj.popularityUrl }>
            <ParksAPIPage popularityAPIValue={ popularityObj.popularityValue } />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/parks">
            <FindParksPage />
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
      </Fade>
    </BrowserRouter>
  )
}

export default PagesArea

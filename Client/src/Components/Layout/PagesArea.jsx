/* eslint-disable array-callback-return */

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

import React, { useState, useEffect } from 'react'
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
import NPAPI from '../API/NPAPI'
import ParksPerState from '../UI/ParksPerState'
import ParkPerPopularity from '../UI/ParkPerPop'

export const PagesArea = () => {

  let [ stateObj, setStateObj ] = useState({ stateUrl: '', stateLabel: '', stateValue: '' })
  let [ popularityObj, setPopularityObj ] = useState({ popularityUrl: '', popularityLabel: '', popularityValue: '' })
    
  const STATES = [

    { url: '/parks/alabama', label: 'Alabama', value: 'al' },
    { url: '/parks/alaska', label: 'Alaska', value: 'ak' },
    { url: '/parks/arizona', label: 'Arizona', value: 'az' },
    { url: '/parks/arkansas', label: 'Arkansas', value: 'ar' },
    { url: '/parks/california', label: 'California', value: 'ca' },
    { url: '/parks/colorado', label: 'Colorado', value: 'co' },
    { url: '/parks/connecticut', label: 'Connecticut', value: 'ct' },
    { url: '/parks/delaware', label: 'Delaware', value: 'de' },
    { url: '/parks/florida', label: 'Florida', value: 'fl' },
    { url: '/parks/georgia', label: 'Georgia', value: 'ga' },
    { url: '/parks/hawaii', label: 'Hawaii', value: 'hi' },
    { url: '/parks/idaho', label: 'Idaho', value: 'id' },
    { url: '/parks/illinois', label: 'Illinios', value: 'il' },
    { url: '/parks/indiana', label: 'Indiana', value: 'in' },
    { url: '/parks/iowa', label: 'Iowa', value: 'ia' },
    { url: '/parks/kansas', label: 'Kansas', value: 'ks' },
    { url: '/parks/kentucky', label: 'Kentucky', value: 'ky' },
    { url: '/parks/louisiana', label: 'Louisiana', value: 'la' },
    { url: '/parks/maine', label: 'Maine', value: 'me' },
    { url: '/parks/maryland', label: 'Maryland', value: 'md' },
    { url: '/parks/massachusetts', label: 'Massachusetts', value: 'ma' },
    { url: '/parks/michigan', label: 'Michigan', value: 'mi' },
    { url: '/parks/minnesota', label: 'Minnesota', value: 'mn' },
    { url: '/parks/mississippi',label: 'Mississippi', value: 'ms' },
    { url: '/parks/missouri', label: 'Missouri', value: 'mo' },
    { url: '/parks/montana', label: 'Montana', value: 'mt' },
    { url: '/parks/nebraska', label: 'Nebraska', value: 'ne' },
    { url: '/parks/nevada', label: 'Nevada', value: 'nv' },
    { url: '/parks/new-hampshire', label: 'New Hampshire', value: 'nh' },
    { url: '/parks/new-jersey', label: 'New Jersey', value: 'nj' },
    { url: '/parks/new-mexico', label: 'New Mexico', value: 'nm' },
    { url: '/parks/new-york', label: 'New York', value: 'ny'},
    { url: '/parks/north-carolina', label: 'North Carolina', value: 'nc' },
    { url: '/parks/north-dakota', label: 'North Dakota', value: 'nd' },
    { url: '/parks/ohio', label: 'Ohio', value: 'oh' },
    { url: '/parks/oklahoma', label: 'Oklahoma', value: 'ok' },
    { url: '/parks/oregon', label: 'Oregon', value: 'or' },
    { url: '/parks/pennsylvania', label: 'Pennsylvania', value: 'pa' },
    { url: '/parks/rhode-island', label: 'Rhode Island', value: 'ri' },
    { url: '/parks/south-carolina', label: 'South Carolina', value: 'sc' },
    { url: '/parks/south-dakota', label: 'South Dakota', value: 'sd' },
    { url: '/parks/tennessee', label: 'Tennessee', value: 'tn' },
    { url: '/parks/texas', label: 'Texas', value: 'tx' },
    { url: '/parks/utah', label: 'Utah', value: 'ut' },
    { url: '/parks/vermont', label: 'Vermont', value: 'vt' },
    { url: '/parks/virginia', label: 'Virginia', value: 'va' },
    { url: '/parks/washington', label: 'Washington', value: 'wa' },
    { url: '/parks/west-virginia', label: 'West Virginia', value: 'wv' },
    { url: '/parks/wisconsin', label: 'Wisconsin', value: 'wi' },
    { url: '/parks/wyoming', label: 'Wyoming', value: 'wy' }
  ]

  const POPULARITY = [
    { url: '/yell', label: 'Wyoming', value: 'yell' },
    { url: '/moru', label: 'South Dakota', value: 'moru' },
    { url: '/grca', label: 'Arizona', value: 'grca' },
    { url: '/yose', label: 'California', value: 'yose' },
    { url: '/glac', label: 'Montana', value: 'glac' },
    { url: '/hale', label: 'Hawaii', value: 'hale' },
    { url: '/arch', label: 'Utah', value: 'arch' },
    { url: '/caco', label: 'California', value: 'caco' },
    { url: '/alca', label: 'California', value: 'alca' },
    { url: '/goga', label: 'California', value: 'goga' }
  ]

  const urlLocation = useLocation()

  stateObj = STATES.map( ( it ) => {
    if(urlLocation.pathname === it.url) {
      setStateObj({
        stateUrl: it.url,
        stateLabel: it.label,
        stateValue: it.value
      })
    }
  })

  popularityObj = POPULARITY.map( ( i ) => {
    if( urlLocation.pathname === i.url ) {
      setPopularityObj({
        popularityUrl: i.url,
        popularityLabel: i.label,
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
            <ParksPerState stateObj={ stateObj } />
          </Route>
          <Route path={ popularityObj.popularityUrl }>
            <ParkPerPopularity popularityObj={ popularityObj } />
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

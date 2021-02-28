/* eslint-disable */

import React, { useState } from 'react'

import { Container, Row, Col, Jumbotron } from 'react-bootstrap'

import ParkAPI from '../API/ParkAPI'

const byPopularityEP = `${process.env.REACT_APP_BY_POPULARITY_API_EP}`

const POPULARITY = [
  { label: 'Yellowstone National Park', value: 'yell' },
  { label: 'Mount Rushmore National Memorial Park', value: 'moru' },
  { label: 'Grand Canyon National Park', value: 'grca' },
  { label: 'Yosemite National Park', value: 'yose' },
  { label: 'Glacier National Park', value: 'glac' },
  { label: 'Haleakala National Park', value: 'hale' },
  { label: 'Arches National Park', value: 'arch' },
  { label: 'Cape Cod National Seashore Park', value: 'caco' },
  { label: 'Alcatraz Island National Park', value: 'alca' },
  { label: 'Golden Gate National Recreational Park', value: 'goga' }
];

export const ByPopularity = ( { currentPopularity, onPopularityChange } ) => {

  if ( currentPopularity === undefined ) {
    currentPopularity = 'ch'
  }
  const popularityConfig = STATES.find( p => p.value === currentPopularity )
  if ( !popularityConfig ) {
    throw new Error( `Unknown popularity choice: '${ currentPopularity }'` )
  }

  const [ open, setOpen ] = useState( false )
  const [ popularity, setPopularity ] = useState( [] )

  const onSelect = async currentPopularity => {

    setOpen(false)
    onPopularityChange(currentPopularity)
   
    const res = await ParkAPI.get( byPopularityEP, { 
      params: { query: currentPopularity }
    })

   // popularity.push( res.data. )  Unfinished business.
   
    setPopularity(popularity)
  }

  return (
    <div>
      <label className="label"> Select park by popularity: </label>
      <div className={ `dropdown ${ open && "is-active" }` }>
        <div className="dropdown-trigger">
          <button className="button" onClick={ () => setOpen( !open ) }>
            <span>{ popularityConfig.label }</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            {POPULARITY.map( ( { label, value } ) => {
              return (
                <a
                  href="#"
                  onClick={ () => onSelect( value ) }
                  className="dropdown-item"
                >
                  { label }
                </a>
              )
            })}
          </div>
        </div>
        <br />
        
        <Container>
          <Row>
            <Col>
              <Jumbotron>

              </Jumbotron>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  )
}

export default ByPopularity

/* eslint-disable */

import React, { useState, useEffect } from 'react'

import { Container, Row, Col, Jumbotron } from 'react-bootstrap'

import ParkAPI from '../API/ParkAPI'

const byStateEP = `${process.env.REACT_APP_BY_STATE_API_EP}`

const STATES = [
  { label: 'Choose', value: 'ch' },
  { label: 'Alabama', value: 'al' },
  { label: 'Alaska', value: 'ak' },
  { label: 'Arizona', value: 'az' },
  { label: 'Arkansas', value: 'ar' },
  { label: 'California', value: 'ca' },
  { label: 'Colorado', value: 'co' },
  { label: 'Connecticut', value: 'ct' },
  { label: 'Delaware', value: 'de' },
  { label: 'Florida', value: 'fl' },
  { label: 'Georgia', value: 'ga' },
  { label: 'Hawaii', value: 'hi' },
  { label: 'Idaho', value: 'id' },
  { label: 'Illinois', value: 'il' },
  { label: 'Indiana', value: 'in' },
  { label: 'Iowa', value: 'ia' },
  { label: 'Kansas', value: 'ks' },
  { label: 'Kentucky', value: 'ky' },
  { label: 'Louisiana', value: 'la' },
  { label: 'Maine', value: 'me' },
  { label: 'Maryland', value: 'md' },
  { label: 'Massachusetts', value: 'ma' },
  { label: 'Michigan', value: 'mi' },
  { label: 'Minnesota', value: 'mn' },
  { label: 'Mississippi', value: 'ms' },
  { label: 'Missouri', value: 'mo' },
  { label: 'Montana', value: 'mt' },
  { label: 'Nebraska', value: 'ne' },
  { label: 'Nevada', value: 'nv' },
  { label: 'New Hampshire', value: 'nh' },
  { label: 'New Jersey', value: 'nj' },
  { label: 'New Mexico', value: 'nm' },
  { label: 'New York', value: 'ny'},
  { label: 'North Carolina', value: 'nc' },
  { label: 'North Dakota', value: 'nd' },
  { label: 'Ohio', value: 'oh' },
  { label: 'Oklahoma', value: 'ok' },
  { label: 'Oregon', value: 'or' },
  { label: 'Pennsylvania', value: 'pa' },
  { label: 'Rhode Island', value: 'ri' },
  { label: 'South Carolina', value: 'sc' },
  { label: 'South Dakota', value: 'sd' },
  { label: 'Tennessee', value: 'tn' },
  { label: 'Texas', value: 'tx' },
  { label: 'Utah', value: 'ut' },
  { label: 'Vermont', value: 'vt' },
  { label: 'Virginia', value: 'va' },
  { label: 'Washington', value: 'wa' },
  { label: 'West Virginia', value: 'wv' },
  { label: 'Wisconsin', value: 'wi' },
  { label: 'Wyoming', value: 'wy' }
];

export const ByState = ({ currentState, onStateChange }) => {
  if (currentState === undefined) {
    currentState = 'ch'
  }

  const parksStateConfig = STATES.find(s => s.value === currentState)

  if (!parksStateConfig) {
    throw new Error(`Unknown state choice: '${ currentState }'`)
  }

  const [ open, setOpen ] = useState(false)
  const [ states, setStates ] = useState( [] )

  const onSelect = async currentState => {

    setOpen(false)
    onStateChange(currentState)

    const res = await ParkAPI.get( byStateEP, { 
      
      params: { query: currentState }

    })

    // states.push( res.data. ) Unfinished business.
    
    setStates(states)
  }

  return (
    <div>
      <label className="label"> Select park by state: </label>
      <div className={ `dropdown ${ open && "is-active" }` }>
        <div className="dropdown-trigger">
          <button className="button" onClick={() => setOpen( !open )}>
            <span>{ parksStateConfig.label }</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            {STATES.map(({ label, value }) => {
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

export default ByState

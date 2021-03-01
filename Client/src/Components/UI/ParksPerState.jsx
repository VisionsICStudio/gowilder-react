import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import { Figure } from 'react-bootstrap'
import ParksPerStatePagination from './UI/ParksPerStatePagination'
import StateImgPagination from './StateImgPagination'
import { aboutHeaderStyle, aboutHeaderTitleStyle, aboutRuleStyle, aboutImgStyle, aboutCaptionStyle, aboutTextStyle } from '../../Styles/Pages/AboutPage.Styles'

export const ParksPerState = ( { stateObj } ) => {

  const APIStateValue = stateObj.stateAPIValue
  const APIStateString = 'https://developer.nps.gov/api/v1/parks?stateCode=' + APIStateValue + '&api_key=qxk4vLHEmNpbSbhNjQNNcIaPoCTmi0MAZ5DQC0Is' 
  
  const [ stateAPI, setStateAPI ] = useState([])
  const [ currentParkPage, setCurrentParkPage ] = useState(1)
  const [ parksPerPage ] = useState(1)
  const [ stateLoading, setStateLoading ] = useState(false)
  
  useEffect(({ stateAPI }) => {

    const getStateAPIArray = async ( states ) => {

      setStateLoading(true)
      const stateRes = await Axios.get( APIStateString )
      console.log( stateRes )

      states = setStateAPI( stateRes.data.data )
      setStateLoading(false)
    }

    return getStateAPIArray( stateAPI )

  },[ APIStateString, APIStateValue, stateAPI ] )

  // Get current posts
  const indexOfLastPark = currentParkPage * parksPerPage
  const indexOfFirstPark = indexOfLastPark - parksPerPage
  const currentParks = stateAPI.slice( indexOfFirstPark, indexOfLastPark )
  const parksPaginate = parkPageNumber => setCurrentParkPage( parkPageNumber )


  if ( stateLoading ) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      { stateAPI.map( ( { fullName, description, images }, state ) => (
        <Container stateObj={ stateObj } stateAPI={ currentParks }>
          <Row style={ aboutHeaderStyle } xl="12">
            <h2 key={ state } style={ aboutHeaderTitleStyle } class="text-white text-uppercase text-left mt-3"> { stateObj.stateLabel } | { fullName } </h2>
            <hr style={ aboutRuleStyle } class="mb-4" />
          </Row>
          <Row xl="12">
            <Col>
              { images.map( ( { url }, img ) => {
                <Figure className="col-12 text-success">
                  <Figure.Image key={ img } src={ url } style={ aboutImgStyle } alt="man in big tree"/>
                  <Figure.Caption style={ aboutCaptionStyle } className="mb-3">
                    This is an image shot from our sponsored location.
                  </Figure.Caption>
                </Figure>
                })
              }
              <StateImgPagination />
            </Col>
          </Row>
          <Row xl="12">
            <Col xl="6">
              <p key={ state } style={ aboutTextStyle } className="text-white">
                { description }
              </p>
            </Col>
            <Col xl="6">
              <p style={ aboutTextStyle } className="text-white">
                {  }
              </p>
            </Col>
          </Row>
        </Container>
       
      ))}  
      <Container>
        <Row>
          <Col>
            <ParksPerStatePagination parksPerPage={ parksPerPage } totalParks={ stateAPI.length } parksPaginate={ parksPaginate } />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ParksPerState

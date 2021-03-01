import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import { Figure } from 'react-bootstrap'
import ParkPerPopPagination from './UI/ParkPerPopPagination'
import PopImgPagination from './PopImgPagination'
import { aboutHeaderStyle, aboutHeaderTitleStyle, aboutRuleStyle, aboutImgStyle, aboutCaptionStyle, aboutTextStyle } from '../../Styles/Pages/AboutPage.Styles'

export const ParksPerPop = ( { popObj } ) => {

  const APIPopValue = popObj.popAPIValue
  const APIPopString = 'https://developer.nps.gov/api/v1/parks?stateCode=' + APIPopValue + '&api_key=qxk4vLHEmNpbSbhNjQNNcIaPoCTmi0MAZ5DQC0Is' 
  
  const [ popAPI, setPopAPI ] = useState([])
  const [ currentPopPage, setCurrentPopPage ] = useState(1)
  const [ popsPerPage ] = useState(1)
  const [ popLoading, setPopLoading ] = useState(false)
  
  useEffect(({ popAPI }) => {

    const getPopAPIArray = async ( popularity ) => {

      setPopLoading( true )
      const popRes = await Axios.get( APIPopString )
      console.log( popRes )

      popularity = setPopAPI( popRes.data.data )
      setPopLoading(false)
    }

    return getPopAPIArray( popAPI )

  },[ APIPopString, APIPopValue, popAPI ] )

  // Get current posts
  const indexOfLastPop = currentPopPage * popsPerPage
  const indexOfFirstPop = indexOfLastPop - popsPerPage
  const currentPop = popAPI.slice( indexOfFirstPop, indexOfLastPop )
  const popsPaginate = popPageNumber => setCurrentPopPage( popPageNumber )


  if ( popLoading ) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      { popAPI.map( ( { fullName, description, images }, p ) => (
        <Container popObj={ popObj } stateAPI={ currentPop }>
          <Row style={ aboutHeaderStyle } xl="12">
            <h2 key={ p } style={ aboutHeaderTitleStyle } class="text-white text-uppercase text-left mt-3"> { popObj.popLabel } | { fullName } </h2>
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
              <PopImgPagination />
            </Col>
          </Row>
          <Row xl="12">
            <Col xl="6">
              <p key={ p } style={ aboutTextStyle } className="text-white">
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
            <ParkPerPopPagination popsPerPage={ popsPerPage } totalPops={ popAPI.length } popsPaginate={ popsPaginate } />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ParksPerPop

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ImagesPerState from './ImagesPerState'
import StateImgPagination from './StateImgPagination'
import { aboutHeaderStyle, aboutHeaderTitleStyle, aboutRuleStyle, aboutTextStyle } from '../../Styles/Pages/AboutPage.Styles'


export const ParksPerState = ({ stateAPI, loading }) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      { stateAPI.map(state => (
        <Container>
          <Row style={ aboutHeaderStyle } xl="12">
            <h2 style={ aboutHeaderTitleStyle } class="text-white text-uppercase text-left mt-3"> { state.fullName } </h2>
            <hr style={ aboutRuleStyle } class="mb-4" />
          </Row>
          <Row xl="12">
            <Col>
              <ImagesPerState />
              <StateImgPagination />
            </Col>
          </Row>
          <Row xl="12">
            <Col xl="6">
              <p style={ aboutTextStyle } className="text-white">
                { state.description }
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
    </>
  )
}

export default ParksPerState

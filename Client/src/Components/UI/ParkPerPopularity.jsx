import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ImagesPerPopularity from './ImagesPerPopularity'
import PopularityImgPagination from './PopularityImgPagination'
import { aboutHeaderStyle, aboutHeaderTitleStyle, aboutRuleStyle, aboutTextStyle } from '../../Styles/Pages/AboutPage.Styles'

const ParkPerPopularity = ( { popularityAPI, loading } ) => {
  if ( loading ) {
    return <h2> Loading... </h2>;
  }

  return (
    <>
      { popularityAPI.map( ( { fullName, description, images }, popularity ) => (
        <Container>
          <Row style={ aboutHeaderStyle } xl="12">
            <h2 key={ popularity } style={ aboutHeaderTitleStyle } class="text-white text-uppercase text-left mt-3"> { fullName } </h2>
            <hr style={ aboutRuleStyle } class="mb-4" />
          </Row>
          <Row xl="12">
            <Col>
              <ImagesPerPopularity key={ popularity } popularityAPI={ images } />
              <PopularityImgPagination />
            </Col>
          </Row>
          <Row xl="12">
            <Col xl="6">
              <p key={ popularity } style={ aboutTextStyle } className="text-white">
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
    </>
  )
}

export default ParkPerPopularity

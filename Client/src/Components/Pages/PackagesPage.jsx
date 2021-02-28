/*
; =======================================================
; Title: PackagesPage.jsx - GoWilderApp - Root folder 
; Authors: Aaron Wilson
; Instructor: Sean Bernath
; Date: 08 February 2021
; Description: Build out app's  PagesArea.jsx file.
; Legend: [ Aaron Wilson ] -> Team member responsible
; for page.
; =======================================================
*/

import React, { useState } from 'react'
import { Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap'

import Modal from 'react-bootstrap/Modal'
import { Navbar, Nav } from 'react-bootstrap'

import Premium from '../../SVG/icons/package-premium.svg'
import Advanced from '../../SVG/icons/package-advanced.svg'
import Standard from '../../SVG/icons/package-standard.svg'

import { packagesHeaderStyle, packagesHeaderTitleStyle, packagesRuleStyle, 
  packagesCardStyle, packagesTitleStyle, packagesTextStyle, packagesCancelButtonStyle,
  packageButtonStyle, packagesModalStyle, packagesNavbarStyle, packagesModalFooterStyle,
  packagesBookButtonStyle, packagesCancelLinkStyle, packagesBookLinkStyle, packagesPriceStyle } from '../../Styles/Pages/PackagesPage.Styles'

import '../../CSS/packagesModalSize.css'

export const PackagesPage = () => {

  const [ premiumShow, setPremiumShow ] = useState(false);
  const [ advancedShow, setAdvancedShow ] = useState(false);
  const [ standardShow, setStandardShow ] = useState(false);

  return (
    <>
      <Container>
        <Row style={ packagesHeaderStyle } xl="12" className="mb-4">
          <h2 style={ packagesHeaderTitleStyle } class="text-white text-uppercase text-left mt-3">Our Packages</h2>
          <hr style={ packagesRuleStyle } class="mb-3"/>
        </Row>
        <Row>
          <Col xl="4">
            <Card style={ packagesCardStyle }>
              <CardImg top width="100%" src={ Premium } className="mb-5" alt="Card image cap" />
              <CardBody style={ packagesTextStyle } >
                <CardTitle style={ packagesTitleStyle } tag="h3">Premium Package</CardTitle>
                <CardText>
                  <p class="text-white">
                    GoWilder's Advanced package will have several upgraded amenities. Although it 
                    is not as rich as the premium package, but it includes the essential important 
                    upgrades you may need for your.
                  </p>
                </CardText>
                <Button style={ packageButtonStyle } onClick={() => setPremiumShow(true)}>Find Out More</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card style={ packagesCardStyle }>
              <CardImg top width="100%" src={ Advanced } className="mb-5" alt="Card image cap" />
              <CardBody style={ packagesTextStyle }>
                <CardTitle style={ packagesTitleStyle } tag="h3">Advanced Package</CardTitle>
                <CardText>
                  <p class="text-white">
                    GoWilder's Advanced package will have several upgraded amenities. Although it is 
                    not as rich as the premium package, but it includes the essential important upgrades 
                    you may need for your.
                  </p>
                </CardText>
                <Button style={ packageButtonStyle } onClick={() => setAdvancedShow(true)}>Find Out More</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card style={ packagesCardStyle }>
              <CardImg top width="100%" src={ Standard } className="mb-5" alt="Card image cap" />
              <CardBody style={ packagesTextStyle }>
                <CardTitle style={ packagesTitleStyle } tag="h3">Standard Package</CardTitle>
                <CardText>
                  <p class="text-white">
                    A GoWilder standard package is looked at as the economical option of the GoWilder 
                    package choices. With this package, travelers will be treated to a memorable stay.
                  </p>
                </CardText>
                <Button style={ packageButtonStyle } onClick={() => setStandardShow(true)}>Find Out More</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal
        show={ premiumShow }
        onHide={() => setPremiumShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={ packagesModalStyle }
      >
        <Modal.Header style={ packagesTextStyle }>
          <Modal.Title >
            <h5 style={ packagesTitleStyle }>
              GoWilder Premium Package 
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={ packagesTextStyle }>
          <Row>
          <Col xl="4">
            <img src={ Premium } class="mt-6" alt="Our Premium Package in Depth" />
          </Col>
          <Col xl="4">
            <p class="modal-text mt-4">
              Our premium package is the mother of all our packages of which is boasting full of awesome amenities no 
              matter which destination you choice, you will receive a top notch experience. Some examples include:
            </p>
            <ul class="text-left mt-5">
              <li>All major attraction tour tickets included</li>
              <li>First choice of premium camping locations</li>
              <li>RV premium lot reservations</li>
              <li>Power and outside shower at RV location</li>
            </ul>
          </Col>
          <Col xl="4">
            <br />
            <hr class="mt-6" />
            <p class="price text-left">
              Yours for: <span style={ packagesPriceStyle } class="ml-5 text-success">$399.99</span><br/><br/>
              * Pricing may be subject to chance with increased seasonal demand.
            </p>
            <hr />
          </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer style={ packagesModalFooterStyle }>
          <Navbar style={ packagesNavbarStyle }>
            <Nav variant="pills" className="ml-auto">
              <Nav.Item className="ml-4" style={ packagesCancelButtonStyle }>
                <Nav.Link style={ packagesCancelLinkStyle }>
                  Cancel
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="ml-4" style={ packagesBookButtonStyle }>
                <Nav.Link style={ packagesBookLinkStyle }>
                  Book Package
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
        </Modal.Footer>
      </Modal>

      <Modal
        show={ advancedShow }
        onHide={() => setAdvancedShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={ packagesModalStyle }
      >
        <Modal.Header style={ packagesTextStyle }>
          <Modal.Title>
            <h5 style={ packagesTitleStyle }>
              GoWilder Advanced Package 
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={ packagesTextStyle }>
          <Row>
            <Col xl="4">
              <img src={ Advanced } class="mt-6" alt="Our Advanced Package in Depth" />
            </Col>
            <Col xl="4">
              <p class="modal-text mt-4">
                GoWilder's advanced package will have several upgraded amenities. Although it is not as rich as the 
                premium package, but it does include the essential important upgrades like:
              </p>
              <ul class="text-left mt-5">
                <li>Reserved accommodations lot at location</li>
                <li>Pre-purchase phone number for all destination tickets</li>
                <li>First available amenity upgrade list</li>
                <li>Direct contact via phone/text of availability</li>
              </ul>
            </Col>
            <Col xl="4">
              <br />
              <hr class="mt-6" />
              <p class="price text-left">
                Yours for: <span style={ packagesPriceStyle } class="ml-5 text-success">$199.99</span><br/><br/>
                * Pricing may be subject to chance with increased seasonal demand.
              </p>
              <hr />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer style={ packagesModalFooterStyle }>
          <Navbar style={ packagesNavbarStyle }>
            <Nav variant="pills" className="ml-auto">
              <Nav.Item className="ml-4" style={ packagesCancelButtonStyle }>
                <Nav.Link style={ packagesCancelLinkStyle }>
                  Cancel
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="ml-4" style={ packagesBookButtonStyle }>
                <Nav.Link style={ packagesBookLinkStyle }>
                  Book Package
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
        </Modal.Footer>
      </Modal>

      <Modal
        show={ standardShow }
        onHide={() => setStandardShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={ packagesModalStyle }
      >
        <Modal.Header style={ packagesTextStyle }>
          <Modal.Title >
            <h5 style={ packagesTitleStyle }>
              GoWilder Standard Package 
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={ packagesTextStyle }>
          <Row>
            <Col xl="4">
              <img src={ Standard } class="mt-6" alt="Our Standard Package in Depth" />
            </Col>
            <Col xl="4">
              <p class="modal-text mt-4">
                A GoWilder standard package is looked at as the economical option of the GoWilder package choices. 
                With this package, travelers will be treated to:
              </p>
              <ul class="text-left mt-5">
                <li>Pre-purchased tickets to the travel destination</li>
                <li>A prep package delivered to your address</li>
                <li>Maps and activity brochures in the prep kit</li>
                <li>First come, first serve amenities hotline</li>
              </ul>
            </Col>
            <Col xl="4">
              <br />
              <hr class="mt-6" />
              <p class="price text-left">
                Yours for: <span style={ packagesPriceStyle } class="ml-5 text-success">$99.99</span><br/><br/>
                * Pricing may be subject to chance with increased seasonal demand.
              </p>
              <hr />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer style={ packagesModalFooterStyle }>
          <Navbar style={ packagesNavbarStyle }>
            <Nav variant="pills" className="ml-auto">
              <Nav.Item className="ml-4" style={ packagesCancelButtonStyle }>
                <Nav.Link style={ packagesCancelLinkStyle }>
                  Cancel
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="ml-4" style={ packagesBookButtonStyle }>
                <Nav.Link style={ packagesBookLinkStyle }>
                  Book Package
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PackagesPage

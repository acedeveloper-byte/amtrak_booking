import { faEnvelope, faMapMarker, faPhone, faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <footer id="footer_area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                            <img src="/images/logo_white.png" />
                            <div class="footer_link_area">
                                <Row>
                                    <Col xs={1} md={1} lg={1}>
                                        <FontAwesomeIcon icon={faPhone} size="1x" color='white' />
                                    </Col>
                                    <Col>
                                        <a href="tel:+1 (855) 564-8004" class="text-decoration-none text-white">(855) 564-8004</a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} md={1} lg={1}>
                                        <FontAwesomeIcon icon={faEnvelope} size="1x" color='white' />
                                    </Col>
                                    <Col>
                                        <a href="mailto:info@amtrakbooking.com" class="text-decoration-none text-white">info@amtrakbooking.com</a>
                                    </Col>
                                </Row>
                                <Row>

                                    <Col xs={1} md={1} lg={1}>
                                        <FontAwesomeIcon icon={faMapMarker} size="1x" color='white' />
                                    </Col>
                                    <Col>
                                        <h6 class="text-decoration-none text-white">California office</h6>
                                        <h3 class="text-decoration-none text-white">California</h3>
                                        <p class="text-decoration-none text-white">3891 Ranchview Dr. Richardson, California 62639</p>
                                    </Col>
                                </Row>
                                <div>

                                </div>

                            </div>
                        </div>
                        <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6 col-12">
                            <div class="footer_heading_area">
                                <h5>Company</h5>
                            </div>
                            <div class="footer_link_area">
                                <ul>
                                    <li><a href="/about-us">About Us</a></li>
                                    <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                                    <li><a href="/disclaimer">Disclaimer</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div class="footer_heading_area">
                                <h5>Support</h5>
                            </div>
                            <div class="footer_link_area">
                                <ul>
                                    <li><a href="/contact-us">Contact</a></li>
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="/cancellation-refund">Cancellation Refund</a></li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

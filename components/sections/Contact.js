import React, { Component } from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";

class Contact extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <Row className={this.props.active + " row-sec1 m-0"}>
                    <Col md={12} className="tokenomics-title">
                        <span>CONTACT US</span>
                    </Col>
                    <Col md={9} className="contact-body mx-auto">
                        <Col md={12} className="input-body-1 d-lg-flex d-md-block">
                            <Col lg={6} md={12} className="input-area mb-4">
                                <InputGroup className="mb-3">
                                    <span className="input-title">Name</span>
                                    <FormControl
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        className="contact-input"
                                    />
                                </InputGroup>
                            </Col>
                            <Col lg={6} md={12} className="input-area mb-4">
                                <InputGroup className="mb-3">
                                    <span className="input-title">Email</span>
                                    <FormControl
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        className="contact-input"
                                    />
                                </InputGroup>
                            </Col>
                        </Col>
                        <Col md={12} className="input-body-2 d-flex mb-4">
                            <InputGroup className="mb-3">
                                <span className="input-title">Subject</span>
                                <FormControl
                                    aria-label="default"
                                    aria-describedby="inputGroup-sizing-default"
                                    className="contact-input"
                                />
                            </InputGroup>
                        </Col>
                        <Col md={12} className="input-body-3 mb-4">
                            <InputGroup className="mb-3">
                                <span className="input-title">Message</span>
                                <FormControl
                                    as="textarea"
                                    aria-label="default"
                                    aria-describedby="inputGroup-sizing-default"
                                    className="contact-input ml-0"
                                    rows={3}
                                />
                            </InputGroup>
                        </Col>
                        <Col md={12} className="contact-button-area">
                            <a href="#" className="contact-button">Message</a>
                        </Col>
                    </Col>
                    <footer>
                        <Col md={5} className="footer-body">
                            <Col md={6} className="footer-logo-area">
                                <a href="#">
                                    <img
                                        alt="Ixırpad"
                                        src="/assets/img/header-logo.svg"
                                    />
                                </a>
                            </Col>
                            <Col md={6} className="social-area">
                                <a href="#" className="social-button">
                                    <img src="/assets/img/instagram.svg" />  
                                </a>
                                <a href="#" className="social-button">
                                    <img src="/assets/img/facebook.svg" />  
                                </a>
                                <a href="#" className="social-button">
                                    <img src="/assets/img/twitter.svg" />  
                                </a>
                            </Col>
                        </Col>
                    </footer>
                </Row>
            </>
        )
    }
}

export default Contact;
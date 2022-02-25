import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Whitepaper extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <Row className={this.props.active + " row-sec2 m-0"}>
                    <Col md={12} className="wp-title">
                        <span>WHITE PAPER</span>
                    </Col>
                    <Col md={12} className="wp-body d-xl-flex d-lg-flex d-md-block d-sm-block d-block">
                        <Col className="wp-left" xl={6} lg={6} md={12} sm={12} xs={12}>
                            <span className="subtraction-body">
                                <img src="/assets/img/computer.svg"/>
                            </span>
                            <Col className="wp-text-body">
                                <Col md={12} className="wp-subtitle">
                                    <span>Download Our Whitepaper</span>
                                    <p>Checkout the Whitepaper v2 version, which contains all the details and information about our project.</p>
                                </Col>
                            </Col>
                            <div className="wp-button-area">
                                <a href="#" className="wp-button">
                                    <p>GET WHITEPAPER</p>
                                </a>
                            </div>
                        </Col>
                        <Col className="wp-right" xl={6} lg={6} md={12} sm={12} xs={12}>
                            <img className="professor-img" src="/assets/img/professor_download.svg"/>
                            <div className="bubble-body">
                                <img className="bubble-1" src="/assets/img/bubbles1.svg"/>
                                <img className="bubble-2" src="/assets/img/bubbles2.svg"/>
                                <img className="bubble-3" src="/assets/img/bubbles3.svg"/>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Whitepaper;
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Banner extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <Row className={this.props.active + " row-sec1 m-0"}>
                    <Col md={12} className="banner-body d-xl-flex d-lg-flex d-md-flex d-sm-block d-block">
                        <Col className="banner-left" xl={6} lg={6} md={6} sm={12} xs={12}>
                            <span className="subtraction-body">
                                <img src="/assets/img/subtraction_3.svg"/>
                            </span>
                            <div className="banner-button-area">
                                <a href="#" className="banner-button">
                                    <p>White Paper</p>
                                </a>
                                <a href="#" className="banner-button">
                                    <p>Buy Token</p>
                                </a>
                            </div>
                        </Col>
                        <Col className="banner-right" xl={6} lg={6} md={6} sm={12} xs={12}>
                            <img src="/assets/img/potionplatform.svg"/>
                            <img src="/assets/img/professor_note.svg"/>
                        </Col>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Banner;
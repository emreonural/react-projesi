import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Roadmap extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <Row className={this.props.active + " row-sec1 m-0"}>
                    <Col md={12} className="roadmap-body d-xl-block d-lg-block d-md-none d-sm-none d-sm-none d-none">
                        <Col md={12} className="roadmap-title">
                            <span>ROAD MAP</span>
                        </Col>
                        <Col md={12} className="roadmap-items-body">
                            <img className="rm-started" src="/assets/img/started.svg" />
                            <Col className="roadmap-items">
                                <Col md={2} className="roadmap-item">
                                    <span className="rm-date">
                                        <p>2021 Q2</p>
                                        <img src="/assets/img/purple_button.svg" />
                                    </span>
                                    <span className="rm-table">
                                        <img src="/assets/img/mortar_green.svg" />
                                    </span>
                                    <a href="#" className="rm-button rm-1">
                                        <p>READ MORE</p>
                                    </a>
                                </Col>
                                <Col md={2} className="roadmap-item">
                                    <span className="rm-date">
                                        <p>2021 Q3</p>
                                        <img src="/assets/img/purple_button.svg" />
                                    </span>
                                    <span className="rm-table">
                                        <img src="/assets/img/mortar_green.svg" />
                                    </span>
                                    <a href="#" className="rm-button rm-1">
                                        <p>READ MORE</p>
                                    </a>
                                </Col>
                                <Col md={2} className="roadmap-item">
                                    <span className="rm-date">
                                        <p>2021 Q4</p>
                                        <img src="/assets/img/purple_button.svg" />
                                    </span>
                                    <span className="rm-table">
                                        <img src="/assets/img/mortar_green.svg" />
                                    </span>
                                    <a href="#" className="rm-button rm-1">
                                        <p>READ MORE</p>
                                    </a>
                                </Col>
                                <Col md={2} className="roadmap-item">
                                    <span className="rm-date">
                                        <p>2022 Q1</p>
                                        <img src="/assets/img/purple_button.svg" />
                                    </span>
                                    <span className="rm-table">
                                        <img src="/assets/img/mortar_blue.svg" />
                                    </span>
                                    <a href="#" className="rm-button rm-2">
                                        <p>READ MORE</p>
                                    </a>
                                </Col>
                                <Col md={2} className="roadmap-item">
                                    <span className="rm-date">
                                        <p>2022 Q2</p>
                                        <img src="/assets/img/purple_button.svg" />
                                    </span>
                                    <span className="rm-table">
                                        <img src="/assets/img/mortar_grey.svg" />
                                    </span>
                                    <a href="#" className="rm-button rm-3">
                                        <p>READ MORE</p>
                                    </a>
                                </Col>
                                <Col md={2} className="roadmap-item">
                                    <span className="rm-date">
                                        <p>2022 Q3</p>
                                        <img src="/assets/img/purple_button.svg" />
                                    </span>
                                    <span className="rm-table">
                                        <img src="/assets/img/mortar_grey.svg" />
                                    </span>
                                    <a href="#" className="rm-button rm-3">
                                        <p>READ MORE</p>
                                    </a>
                                </Col>
                            </Col>
                        </Col>
                    </Col>
                    <Col md={12} className="roadmap-body d-xl-none d-lg-none d-md-block d-sm-block d-sm-block d-block">
                        <Col md={12} className="roadmap-mobile-title">
                            <span>ROAD MAP</span>
                        </Col>
                        <Col md={12} className="roadmap-items-mobile">
                            <Col className="m-roadmap-items">
                                <Col md={12} className="m-roadmap-item">
                                    <span className="rm-date">
                                        <p>2021 Q2</p>
                                        <img src="/assets/img/purple_button.svg" />
                                    </span>
                                    <span className="rm-table">
                                        <img src="/assets/img/mortar_green.svg" />
                                    </span>
                                    <a href="#" className="m-rm-button rm-1">
                                        <p>READ MORE</p>
                                    </a>
                                </Col>
                                <Col md={12} className="m-roadmap-item">
                                    <span className="rm-date">
                                        <p>2021 Q3</p>
                                        <img src="/assets/img/purple_button.svg" />
                                    </span>
                                    <span className="rm-table">
                                        <img src="/assets/img/mortar_green.svg" />
                                    </span>
                                    <a href="#" className="m-rm-button rm-1">
                                        <p>READ MORE</p>
                                    </a>
                                </Col>
                                <Col md={12} className="m-roadmap-item">
                                    <span className="rm-date">
                                        <p>2021 Q4</p>
                                        <img src="/assets/img/purple_button.svg" />
                                    </span>
                                    <span className="rm-table">
                                        <img src="/assets/img/mortar_green.svg" />
                                    </span>
                                    <a href="#" className="m-rm-button rm-1">
                                        <p>READ MORE</p>
                                    </a>
                                </Col>
                                <Col md={12} className="m-roadmap-item">
                                    <span className="rm-date">
                                        <p>2022 Q1</p>
                                        <img src="/assets/img/purple_button.svg" />
                                    </span>
                                    <span className="rm-table">
                                        <img src="/assets/img/mortar_blue.svg" />
                                    </span>
                                    <a href="#" className="m-rm-button rm-2">
                                        <p>READ MORE</p>
                                    </a>
                                </Col>
                                <Col md={12} className="m-roadmap-item">
                                    <span className="rm-date">
                                        <p>2022 Q2</p>
                                        <img src="/assets/img/purple_button.svg" />
                                    </span>
                                    <span className="rm-table">
                                        <img src="/assets/img/mortar_grey.svg" />
                                    </span>
                                    <a href="#" className="m-rm-button rm-3">
                                        <p>READ MORE</p>
                                    </a>
                                </Col>
                                <Col md={12} className="m-roadmap-item">
                                    <span className="rm-date">
                                        <p>2022 Q3</p>
                                        <img src="/assets/img/purple_button.svg" />
                                    </span>
                                    <span className="rm-table">
                                        <img src="/assets/img/mortar_grey.svg" />
                                    </span>
                                    <a href="#" className="m-rm-button rm-3">
                                        <p>READ MORE</p>
                                    </a>
                                </Col>
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Roadmap;
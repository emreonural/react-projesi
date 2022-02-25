import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Exchance extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <Row className={this.props.active + " row-sec2 m-0"}>
                    <Col md={12} className="exchance-title">
                        <span>DECENTRALIZED EXCHANCE PLATFORM</span>
                        <p>Ixirswap is a decentralized exchance operating on the BSC network.</p>
                    </Col>
                    <Col md={12} className="exchance-body">
                        <Col md={12} className="exchance-items d-xl-flex d-lg-flex d-md-none d-sm-none d-none">
                            <Col xl={4} lg={4} md={12} sm={12} xs={12} className="exchance-sec-1">
                                <img className="exc-img" src="/assets/img/right_panel.svg" />
                                <a href="#" className="exchange-button">
                                    <p>WHITE PAPER</p>
                                    <img src="/assets/img/right_button.svg" />
                                </a>
                                <img className="exc-potion" id="potion-1" src="/assets/img/right_potion.svg" />
                                <Col className="text-area">
                                    <span className="exc-title">Powerful Platform</span>
                                    <span className="ext-subtext">
                                        We are dedicated to providing professional service with 
                                        the highest degree of honestly and integrity.
                                    </span>
                                    <span className="ext-footer">
                                        <p><img src="/assets/img/check.png" />Low Fee</p>
                                        <p><img src="/assets/img/check.png" />Secure Access</p>
                                        <p><img src="/assets/img/check.png" />High Successful Recovery</p>
                                        <p><img src="/assets/img/check.png" />Creative Layout</p>
                                    </span>
                                </Col>
                            </Col>
                            <Col xl={4} lg={4} md={12} sm={12} xs={12} className="exchance-sec-2">
                                <img className="exc-img" src="/assets/img/center_panel.svg" />
                                <a href="#" className="exchange-button">
                                    <p>READ MORE</p>
                                    <img src="/assets/img/center_button.svg" />
                                </a>
                                <img className="exc-potion" id="potion-2" src="/assets/img/center_potion.svg" />
                                <Col className="text-area">
                                    <span className="exc-title">Best Trading Experience</span>
                                    <span className="ext-subtext">
                                        Trade on the ixirswap exchange and avoid high costs. 
                                        A reliable, fast and flawlessly functioning platform.
                                    </span>
                                    <span className="ext-subtext">
                                        Ixirswap offers its users the opportunity to trade in a safe environment.
                                        Ixirswap aims to be the best and most reliable DEX platform in the world.
                                        It works for more reliable trading with its own ICO Launchpad and AUDIT platform. 
                                    </span>
                                </Col>
                            </Col>
                            <Col xl={4} lg={4} md={12} sm={12} xs={12} className="exchance-sec-3">
                                <img className="exc-img" src="/assets/img/left_panel.svg" />
                                <a href="#" className="exchange-button">
                                    <p>READ MORE</p>
                                    <img src="/assets/img/left_button.svg" />
                                </a>
                                <img className="exc-potion" id="potion-3" src="/assets/img/left_potion.svg" />
                                <Col className="text-area">
                                    <span className="exc-title">IXIR Audit and KYC</span>
                                    <span className="ext-subtext">
                                        The first DEX platform with its own AUDIT system.
                                    </span>
                                    <span className="ext-subtext">
                                        IXIR AUDIT is the first DEX AUDIT platform with its own security principles and 
                                        capable of KYC verification. It is an AUDIT platform that can minimize the 
                                        posibilty of deception thanks to its high-level security measures.
                                    </span>
                                </Col>
                            </Col>
                        </Col>
                        <Col md={12} className="m-exchance-items d-xl-none d-lg-none d-md-block d-sm-block d-block">
                            <Col xl={4} lg={4} md={12} sm={12} xs={12} className="exchance-sec-1">
                                <img className="exc-img" src="/assets/img/right_panel.svg" />
                                <a href="#" className="exchange-button">
                                    <p>WHITE PAPER</p>
                                    <img src="/assets/img/right_button.svg" />
                                </a>
                                <img className="exc-potion" id="potion-1" src="/assets/img/right_potion.svg" />
                                <Col className="text-area">
                                    <span className="exc-title">Powerful Platform</span>
                                    <span className="ext-subtext">
                                        We are dedicated to providing professional service with 
                                        the highest degree of honestly and integrity.
                                    </span>
                                    <span className="ext-footer">
                                        <p><img src="/assets/img/check.png" />Low Fee</p>
                                        <p><img src="/assets/img/check.png" />Secure Access</p>
                                        <p><img src="/assets/img/check.png" />High Successful Recovery</p>
                                        <p><img src="/assets/img/check.png" />Creative Layout</p>
                                    </span>
                                </Col>
                            </Col>
                            <Col xl={4} lg={4} md={12} sm={12} xs={12} className="exchance-sec-2">
                                <img className="exc-img" src="/assets/img/center_panel.svg" />
                                <a href="#" className="exchange-button">
                                    <p>READ MORE</p>
                                    <img src="/assets/img/center_button.svg" />
                                </a>
                                <img className="exc-potion" id="potion-2" src="/assets/img/center_potion.svg" />
                                <Col className="text-area">
                                    <span className="exc-title">Best Trading Experience</span>
                                    <span className="ext-subtext">
                                        Trade on the ixirswap exchange and avoid high costs. 
                                        A reliable, fast and flawlessly functioning platform.
                                    </span>
                                    <span className="ext-subtext">
                                        Ixirswap offers its users the opportunity to trade in a safe environment.
                                        Ixirswap aims to be the best and most reliable DEX platform in the world.
                                        It works for more reliable trading with its own ICO Launchpad and AUDIT platform. 
                                    </span>
                                </Col>
                            </Col>
                            <Col xl={4} lg={4} md={12} sm={12} xs={12} className="exchance-sec-3">
                                <img className="exc-img" src="/assets/img/left_panel.svg" />
                                <a href="#" className="exchange-button">
                                    <p>READ MORE</p>
                                    <img src="/assets/img/left_button.svg" />
                                </a>
                                <img className="exc-potion" id="potion-3" src="/assets/img/left_potion.svg" />
                                <Col className="text-area">
                                    <span className="exc-title">IXIR Audit and KYC</span>
                                    <span className="ext-subtext">
                                        The first DEX platform with its own AUDIT system.
                                    </span>
                                    <span className="ext-subtext">
                                        IXIR AUDIT is the first DEX AUDIT platform with its own security principles and 
                                        capable of KYC verification. It is an AUDIT platform that can minimize the 
                                        posibilty of deception thanks to its high-level security measures.
                                    </span>
                                </Col>
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Exchance;
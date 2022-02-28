import React, { Component } from "react";
import { Col } from "react-bootstrap";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 0,
            opened: false,
            titles: [
                'Home',
                'About Us',
                'RoadMap',
                'Tokenomic',
                'Whitepaper',
                'Contact',
            ]
        }
    }
    handleLocate = (index, e) => {
        this.setState({
            page: index,
        })
    }
    mobileHeader = (e) => {
        this.setState({
            opened: !this.state.opened,
        })
    }
    render(){
        return (
            <>
                <Col md="12" className="header">
                    <Col xl={2} lg={2} md={4} sm={4} xs={4} className="h-logo-area">
                        <a href="#">
                            <img
                                alt="Ixırpad"
                                src="/assets/img/header-logo.svg"
                            />
                        </a>
                    </Col>
                    <Col md={7} className="h-title-area d-xl-flex d-lg-flex d-none">
                        {this.state.titles.map((item, index) => {
                            return (
                                <a key={index} href="#" 
                                    onClick={this.handleLocate.bind(this, index)} 
                                    className={"col header-title " + (this.state.page === index ? 'active' : '')}
                                >
                                    <p>{item}</p>
                                </a>
                            );
                        })}
                    </Col>
                    <Col xl={3} lg={3} md={8} sm={8} xs={8} className="h-button-area">
                        <a href="#" className="header-button">
                            <p>Launchpad</p>
                        </a>
                        <a href="#" className="header-button">
                            <p>Stake</p>
                        </a>
                        <div id="hamburger" 
                            className={(this.state.opened ? 'cross' : '' ) + " mobile-header-btn d-xl-none d-lg-none d-flex"}
                            onClick={this.mobileHeader}
                        >
                            <svg id="icon" viewBox="0 0 800 600">
                                <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                <path d="M300,320 L540,320" id="middle"></path>
                                <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                            </svg>
                        </div>
                    </Col>
                    <Col md="7" className={(this.state.opened ? 'opened' : '' ) + " m-title-area d-xl-none d-lg-none d-block"}>
                        {this.state.titles.map((item, index) => {
                            return (
                                <a key={index} href="#" 
                                    onClick={this.handleLocate.bind(this, index)} 
                                    className={"col m-header-title "}
                                >
                                    <p>{item}</p>
                                </a>
                            );
                        })}
                    </Col>
                </Col>
            </>
        )
    }
}

export default Header;
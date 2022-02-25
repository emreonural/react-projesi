import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Image from 'next/image'

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 0,
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
    render(){
        return (
            <>
                <Col md="12" className="header">
                    <Col md="3" className="h-logo-area">
                        <a href="#">
                            <img
                                alt="Ixırpad"
                                src="/assets/img/header-logo.svg"
                            />
                        </a>
                    </Col>
                    <Col md="6" className="h-title-area">
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
                    <Col md="3" className="h-button-area">
                        <a href="#" className="header-button">
                            <p>Launchpad</p>
                        </a>
                        <a href="#" className="header-button">
                            <p>Stake</p>
                        </a>
                    </Col>
                </Col>
            </>
        )
    }
}

export default Header;
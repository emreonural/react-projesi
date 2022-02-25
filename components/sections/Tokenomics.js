import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
                

class Tokenomics extends Component {
    constructor(props){
        super(props);
        this.state = {
            statistics: [
                {
                    name: 'Reserved Funding (One Year Lock)',
                    amount: '10.000.000',
                },
                {
                    name: 'Advisor (%1 Unlock Per Week)',
                    amount: '3.000.000',
                },
                {
                    name: 'White List',
                    amount: '30.000.000',
                },
                {
                    name: 'Pre-Sale',
                    amount: '5.000.000',
                },
                {
                    name: 'Liquidty (Five Years Lock)',
                    amount: '10.000.000',
                },
                {
                    name: 'Development (Six Months Lock)',
                    amount: '5.000.000',
                },
                {
                    name: 'Stake & Farming (Unlock Per Months)',
                    amount: '10.000.000',
                },
                {
                    name: 'Marketing (One Months Lock)',
                    amount: '10.000.000',
                },
                {
                    name: 'Partnership (One Year Lock)',
                    amount: '7.000.000',
                },
                {
                    name: 'Reserved Funding (One Year Lock)',
                    amount: '15.000.000',
                },
            ]
        }
    }

    render(){
        return (
            <>
                <Row className={this.props.active + " row-sec1 m-0"}>
                    <Col md={12} className="tokenomics-title">
                        <span>TOKENOMICS</span>
                    </Col>
                    <Col md={12} className="tokenomics-body d-xl-flex d-lg-flex d-md-none d-sm-none d-none">
                        <Col md={6} className="tokenomics-left">
                            <img src="/assets/img/lab.svg"/>
                            <Col className="lab-body">
                                <Col md={12} className="m-statistic-body">
                                    <span className="m-left-statistic">
                                        <p>Token Name</p>
                                    </span>
                                    <span className="m-right-statistic">
                                        <p>IXIRPAD</p>
                                    </span>
                                </Col>
                                <Col md={12} className="m-statistic-body">
                                    <span className="m-left-statistic">
                                        <p>Symbol</p>
                                    </span>
                                    <span className="m-right-statistic">
                                        <p>IXIR</p>
                                    </span>
                                </Col>
                                <Col md={12} className="m-statistic-body">
                                    <span className="m-left-statistic">
                                        <p>Total Suply</p>
                                    </span>
                                    <span className="m-right-statistic">
                                        <p>100.000.000</p>
                                    </span>
                                </Col>
                            </Col>
                        </Col>
                        <Col md={6} className="tokenomics-right">
                            {this.state.statistics.map((item, index) => {
                                return (
                                    <Col md={12} className="statistic-body" key={index}>
                                        <span className="left-statistic">
                                            <p>{item.name}</p>
                                        </span>
                                        <span className="right-statistic">
                                            <p>{item.amount}</p>
                                        </span>
                                    </Col>
                                );
                            })}
                            
                        </Col>
                    </Col>
                    <Col md={12} className="m-tokenomics-body d-xl-none d-lg-none d-md-flex d-sm-flex d-flex">
                        <Col md={12} className="m-tokenomics-left">
                            <img src="/assets/img/lab.svg"/>
                        </Col>
                        <Col md={12} className="m-tokenomics-right">
                            {this.state.statistics.map((item, index) => {
                                return (
                                    <Col md={12} className="m-statistic-body" key={index}>
                                        <span className="m-left-statistic">
                                            <p>{item.name}</p>
                                        </span>
                                        <span className="m-right-statistic">
                                            <p>{item.amount}</p>
                                        </span>
                                    </Col>
                                );
                            })}
                            
                        </Col>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Tokenomics;
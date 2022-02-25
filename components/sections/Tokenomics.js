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
                    <Col md={12} className="tokenomics-body">
                        <Col md={6} className="tokenomics-left">
                            <img src="/assets/img/lab.svg"/>
                            <Col className="lab-body">
                                <Col md={12} className="lab-text">
                                    <span className="left-lab">
                                        <p>Token Name</p>
                                        <img src="/assets/img/small_panel.svg" />
                                    </span>
                                    <span className="right-lab">
                                        <p>IXIRPAD</p>
                                        <img src="/assets/img/small_transparent.svg" />
                                    </span>
                                </Col>
                                <Col md={12} className="lab-text">
                                    <span className="left-lab">
                                        <p>Symbol</p>
                                        <img src="/assets/img/small_panel.svg" />
                                    </span>
                                    <span className="right-lab">
                                        <p>IXIR</p>
                                        <img src="/assets/img/small_transparent.svg" />
                                    </span>
                                </Col>
                                <Col md={12} className="lab-text">
                                    <span className="left-lab">
                                        <p>Total Suply</p>
                                        <img src="/assets/img/small_panel.svg" />
                                    </span>
                                    <span className="right-lab">
                                        <p>100.000.000</p>
                                        <img src="/assets/img/small_transparent.svg" />
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
                </Row>
            </>
        )
    }
}

export default Tokenomics;
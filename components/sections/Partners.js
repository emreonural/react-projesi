import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "../components/slider";

const partners = [
    {
        name: "Partner-1",
        image: "/assets/img/symbol3.png",
    },
    {
        name: "Partner-2",
        image: "/assets/img/symbol2.png",
    },
    {
        name: "Partner-3",
        image: "/assets/img/symbol1.png",
    },
    {
        name: "Partner-4",
        image: "/assets/img/symbol4.png",
    },
    {
        name: "Partner-5",
        image:"/assets/img/symbol5.png",
    }
];
const projects = [
    {
        name: "",
        image: "/assets/img/symbol3.png",
    },
    {
        name: "",
        image: "/assets/img/symbol2.png",
    },
    {
        name: "",
        image: "/assets/img/symbol1.png",
    },
    {
        name: "",
        image: "/assets/img/symbol4.png",
    },
    {
        name: "",
        image:"/assets/img/symbol5.png",
    }
];
class Partners extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <Row className={this.props.active + " row-sec2 m-0"}>
                    <Col md={12} className="h-50">
                        <Col md={12} className="partners-title">
                            <span>OUR PARTNERS</span>
                        </Col>
                        <Col md={12} className="partners-body">
                            <Slider
                                arr={partners}
                            />
                        </Col>
                    </Col>
                    <Col md={12} className="h-50">
                        <Col md={12} className="partners-title">
                            <span>PROJECT</span>
                        </Col>
                        <Col md={12} className="projects-body">
                            <Slider
                                arr={projects}
                            />
                        </Col>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Partners;
import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import { Col } from "react-bootstrap";


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
};

class Slider extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <Carousel
                    swipeable={false}
                    responsive={responsive}
                    ssr={true}
                    autoPlay={true}
                    infinite={true}
                    autoPlaySpeed={3000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["mobile", "desktop", "tablet"]}
                    deviceType={["desktop"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {this.props.arr.map((item, index) => {
                        return (
                                <Col className="partner-item" key={index}>
                                    <img
                                        draggable={false}
                                        style={{ width: "100%", height: "100%" }}
                                        src={item.image}
                                    />
                                    <span>{item.name}</span>
                                </Col>
                        );
                    })}
                </Carousel>
            </>
        )
    }
}
export default Slider;
import React, { Component } from "react";
import Banner from "./sections/Banner";
import Partners from "./sections/Partners";
import Roadmap from "./sections/Roadmap";
import Tokenomics from "./sections/Tokenomics";
import Whitepaper from "./sections/Whitepaper";
import Exchange from "./sections/Exchance";
import Contact from "./sections/Contact";

class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            innerheight: 0,
            innerwidth: 0,
            page: 0,
            touchxS: 0,
            touchxE: 0,
            canscroll: true,
        }
    }
    async componentDidMount() {
        await this.setState({
            innerwidth: window.visualViewport.width || document.documentElement.clientWidth,
            innerheight: window.visualViewport.height || document.documentElement.clientHeight
        })
        window.scrollTo(0, 0);
        window.addEventListener("scroll", this.handleScroll.bind(this));
            document.querySelector('html').style.overflow = 'auto';
    }
    handleScroll = () => {
        this.setState({
            page: Math.floor((window.scrollY)/this.state.innerheight),
        })
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll.bind(this));
    }
    handleNavigate = async (ind) => {
        await this.setState({
            page: ind,
        });
        await window.scrollTo(0, (this.state.page)*this.state.innerheight);
    }
    render(){
        return (
            <>
                <div className="navigators">
                    <span onClick={this.handleNavigate.bind(this, 0)} className={this.state.page == 0 ? "navigator active" : "navigator"}></span>
                    <span onClick={this.handleNavigate.bind(this, 1)} className={this.state.page == 1 ? "navigator active" : "navigator"}></span>
                    <span onClick={this.handleNavigate.bind(this, 2)} className={this.state.page == 2 ? "navigator active" : "navigator"}></span>
                    <span onClick={this.handleNavigate.bind(this, 3)} className={this.state.page == 3 ? "navigator active" : "navigator"}></span>
                    <span onClick={this.handleNavigate.bind(this, 4)} className={this.state.page == 4 ? "navigator active" : "navigator"}></span>
                    <span onClick={this.handleNavigate.bind(this, 5)} className={this.state.page == 5 ? "navigator active" : "navigator"}></span>
                    <span onClick={this.handleNavigate.bind(this, 6)} className={this.state.page == 6 ? "navigator active" : "navigator"}></span>
                </div>

                <Banner
                    active={"active-" + (this.state.page)}
                />
                <Exchange
                    active={"active-" + (this.state.page)}
                />
                <Roadmap
                    active={"active-" + (this.state.page)}
                />
                <Whitepaper
                    active={"active-" + (this.state.page)}
                />
                <Tokenomics
                    active={"active-" + (this.state.page)}
                />
                <Partners
                    active={"active-" + (this.state.page)}
                />
                <Contact
                    active={"active-" + (this.state.page)}
                />
            </>
        )
    }
}

export default Main;
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
        window.addEventListener("wheel", this.handleWay.bind(this));
        window.addEventListener("scroll", this.handleScroll.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
        if(this.state.innerwidth > 750){
            document.querySelector('html').style.overflow = 'hidden';
        }
        else {
            document.querySelector('html').style.overflow = 'auto';
        }
    }
    // handleTStart = (e) => {
    //     this.setState({
    //         touchxS: e.touches[0].clientX
    //     })
    // }
    // handleTEnd = async (e) => {
    //     await this.setState({
    //         touchxE: e.changedTouches[0].clientX
    //     });
    //     if(this.state.touchxE - this.state.touchxS > 10 || this.state.touchxE - this.state.touchxS < -10){
    //         this.handleWay({deltaY: this.state.touchxE - this.state.touchxS})
    //     }
    //     await this.setState({
    //         touchxS: 0,
    //         touchxE: 0
    //     });
    // }

    handleResize = async (e) => {
        await this.setState({
            innerwidth: window.visualViewport.width || document.documentElement.clientWidth,
        })
        if(this.state.innerwidth > 750){
            document.querySelector('html').style.overflow = 'hidden';
        }
        else {
            document.querySelector('html').style.overflow = 'auto';
        }
    }
    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    handleWay = async (e) => {
        if(this.state.innerwidth > 750){
            if(this.state.canscroll){
                if (e.deltaY < 0){
                    await this.setState({
                        page: this.state.page==0 ? 0 : (this.state.page - 1),
                        canscroll: false,
                    });
                    for(var i = ((this.state.page + 1)*this.state.innerheight/10); i >= ((this.state.page)*this.state.innerheight/10); i--){
                        await window.scrollTo(0, i*10);
                        await this.sleep(7);
                    }
                }

                else{
                    await this.setState({
                        page: this.state.page == 6 ? 6 : (this.state.page + 1),
                        canscroll: false,
                    });
                    for(var i = ((this.state.page - 1)*this.state.innerheight/10); i <= ((this.state.page)*this.state.innerheight/10); i++){
                        await window.scrollTo(0, i*10);
                        await this.sleep(7);
                    }
                }
                await this.sleep(500);
                this.setState({
                    canscroll: true,
                })
            }
        }
    }
    handleScroll = () => {
        if(this.state.innerwidth < 750){
            this.setState({
                page: Math.floor((window.scrollY)/this.state.innerheight),
            })
        }
    }
    componentWillUnmount() {
        window.removeEventListener("wheel", this.handleWay.bind(this));
        window.removeEventListener("scroll", this.handleScroll.bind(this));
        window.removeEventListener('resize', this.handleResize.bind(this));
        // window.removeEventListener("touchstart", this.handleTStart.bind(this));
        // window.removeEventListener("touchend", this.handleTEnd.bind(this));
    }
    handleNavigate = async (ind) => {
        if(this.state.innerwidth > 750){
            if(this.state.canscroll){
                if (ind < this.state.page){
                    await this.setState({
                        page: ind,
                        canscroll: false,
                    });
                    for(var i = ((this.state.page + 1)*this.state.innerheight/10); i >= ((this.state.page)*this.state.innerheight/10); i--){
                        await window.scrollTo(0, i*10);
                        await this.sleep(7);
                    }
                }
    
                else{
                    await this.setState({
                        canscroll: false,
                        page: ind,
                    });
                    for(var i = ((this.state.page - 1)*this.state.innerheight/10); i <= ((this.state.page)*this.state.innerheight/10); i++){
                        await window.scrollTo(0, i*10);
                        await this.sleep(7);
                    }
                }
                await this.sleep(500);
                this.setState({
                    canscroll: true,
                })
            }
        }
        else {
            await this.setState({
                page: ind,
            });
            window.scrollTo(0, this.state.page*this.state.innerheight);
        }
    }
    handleMobilenav = (ind) => {
        this.setState({
            page: ind,
        });
    }
    render(){
        return (
            <>
                <div className="navigators d-none d-xl-block d-lg-block d-md-block">
                    <span onClick={this.handleNavigate.bind(this, 0)} className={this.state.page == 0 ? "navigator active" : "navigator"}></span>
                    <span onClick={this.handleNavigate.bind(this, 1)} className={this.state.page == 1 ? "navigator active" : "navigator"}></span>
                    <span onClick={this.handleNavigate.bind(this, 2)} className={this.state.page == 2 ? "navigator active" : "navigator"}></span>
                    <span onClick={this.handleNavigate.bind(this, 3)} className={this.state.page == 3 ? "navigator active" : "navigator"}></span>
                    <span onClick={this.handleNavigate.bind(this, 4)} className={this.state.page == 4 ? "navigator active" : "navigator"}></span>
                    <span onClick={this.handleNavigate.bind(this, 5)} className={this.state.page == 5 ? "navigator active" : "navigator"}></span>
                    <span onClick={this.handleNavigate.bind(this, 6)} className={this.state.page == 6 ? "navigator active" : "navigator"}></span>
                </div>
                <div className="navigators d-block d-sm-block d-xs-block d-xl-none d-lg-none d-md-none">
                    <a onClick={this.handleMobilenav.bind(this, 0)} href="#Banner" className={this.state.page == 0 ? "navigator active" : "navigator"}></a>
                    <a onClick={this.handleMobilenav.bind(this, 1)} href="#Exchance" className={this.state.page == 1 ? "navigator active" : "navigator"}></a>
                    <a onClick={this.handleMobilenav.bind(this, 2)} href="#Roadmap" className={this.state.page == 2 ? "navigator active" : "navigator"}></a>
                    <a onClick={this.handleMobilenav.bind(this, 3)} href="#Whitepaper" className={this.state.page == 3 ? "navigator active" : "navigator"}></a>
                    <a onClick={this.handleMobilenav.bind(this, 4)} href="#Tokenomics" className={this.state.page == 4 ? "navigator active" : "navigator"}></a>
                    <a onClick={this.handleMobilenav.bind(this, 5)} href="#Partners" className={this.state.page == 5 ? "navigator active" : "navigator"}></a>
                    <a onClick={this.handleMobilenav.bind(this, 6)} href="#Contact" className={this.state.page == 6 ? "navigator active" : "navigator"}></a>
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
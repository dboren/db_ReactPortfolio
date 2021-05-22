import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";


class Portfolio extends Component {

    render() {
        return (
            <div>
            <Header></Header>
                <Project></Project>
            <Footer></Footer>
            </div>
        );
    }
};

export default Portfolio;
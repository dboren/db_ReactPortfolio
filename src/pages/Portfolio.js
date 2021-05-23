import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";


class Portfolio extends Component {

    render() {

        const projectInfo = [
            {
                name: "Curatio",
                imgLink: "https://github.com/dboren/db_UpdatedPortfolio2/blob/main/Assets/Images/Curatio_Screencap.JPG?raw=true",
                description: "This application utlizes the Youtube API and MapBox API to allow users to put together curated youtube video playlists for hobbies of their choice, after which they can continue to add personal notes to specific videos they have saved. This is a true full stack application which saves user accounts along with their hobbies, videos, and notes in a database",
                contributors: "Created in collaboration with Mark Lloyd, Kayleigh Hanna, and Kanna Vairavan",
                repoURL: "https://github.com/m-llo/Project-2-Team-6",
                deployedURL: "https://stormy-river-69253.herokuapp.com"

            }

        ]

        return (
            <div>
            <Header></Header>
                {projectInfo.map(item => (
                    <Project name={item.name} imgLink={item.imgLink} description={item.description} contributors={item.contributors} repoURL={item.repoURL} deployedURL={item.deployedURL}/>
                ))}
            <Footer></Footer>
            </div>
        );
    }
};

export default Portfolio;
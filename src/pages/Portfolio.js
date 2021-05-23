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
                altText: "Screenshot of Curatio",
                description: "This application utlizes the Youtube API and MapBox API to allow users to put together curated youtube video playlists for hobbies of their choice, after which they can continue to add personal notes to specific videos they have saved. This is a true full stack application which saves user accounts along with their hobbies, videos, and notes in a database",
                contributors: "Created in collaboration with Mark Lloyd, Kayleigh Hanna, and Kanna Vairavan",
                repoURL: "https://github.com/m-llo/Project-2-Team-6",
                deployedURL: "https://stormy-river-69253.herokuapp.com"
            },
            {
                name: "Nonprofit Locator",
                imgLink: "https://github.com/riraq/Nonprofit_Locator/blob/main/assets/ScreenCap.JPG?raw=true",
                altText: "Screenshot of Nonprofit Locator",
                description: "This application utlizes the ProPublica Nonprofit Explorer API and MapBox API to allow users to search for animal and environmental focused nonprofit organizations by city in the USA.",
                contributors: "Created in collaboration with Rony Iraq, Kayleigh Hanna, and Angelica Courson",
                repoURL: "https://github.com/riraq/Nonprofit_Locator",
                deployedURL: "https://riraq.github.io/Nonprofit_Locator/"
            },
            {
                name: "Day-Planner",
                imgLink: "https://github.com/dboren/db_ReactPortfolio/blob/main/src/assets/images/DayPlannerSC.JPG?raw=true",
                altText: "Screenshot of Day-Planner",
                description: "This application allows users to save notes to a cell for each hour of the day and access again upon return sessions. App also color codes cells depending on the current time",
                contributors: "",
                repoURL: "https://github.com/dboren/db_hw_DayPlanner",
                deployedURL: "https://dboren.github.io/db_hw_DayPlanner/"
            },
            {
                name: "Weather Dashboard",
                imgLink: "https://github.com/dboren/db_ReactPortfolio/blob/main/src/assets/images/WeatherDashboardSC.JPG?raw=true",
                altText: "Screenshot of Weather Dashboard",
                description: "This application utilizes to OpenWeather API to allow users to look up weather conditions and a 5 day forecast by city.",
                contributors: "",
                repoURL: "https://github.com/dboren/db_hw_WeatherDashboard",
                deployedURL: "https://dboren.github.io/db_hw_WeatherDashboard/"
            },
            {
                name: "NoteTaker",
                imgLink: "https://github.com/dboren/db_ReactPortfolio/blob/main/src/assets/images/NoteTakerSC.JPG?raw=true",
                altText: "Screenshot of NoteTaker",
                description: "This application uses Express routing to allow users to write and save notes in their browser.",
                contributors: "",
                repoURL: "https://github.com/dboren/db-hw-NoteTaker",
                deployedURL: "https://cryptic-fortress-45570.herokuapp.com/"
            },
            {
                name: "BudgetTracker",
                imgLink: "https://github.com/dboren/db_ReactPortfolio/blob/main/src/assets/images/BudgetTrackerSC.JPG?raw=true",
                altText: "Screenshot of BudgetTracker",
                description: "This application allows users to keep track of their budget by entering transactions which are stored to an indexed database in their web browser. This is a progressive web application which allows users to continue saving transactions even without an internet connection.",
                contributors: "",
                repoURL: "https://github.com/dboren/db_hw_BudgetTracker",
                deployedURL: "https://calm-tundra-13113.herokuapp.com"
            }


        ]

        return (
            <div>
            <Header></Header>
                {projectInfo.map(item => (
                    <Project name={item.name} imgLink={item.imgLink} description={item.description} altText={item.altText} contributors={item.contributors} repoURL={item.repoURL} deployedURL={item.deployedURL}/>
                ))}
            <Footer></Footer>
            </div>
        );
    }
};

export default Portfolio;
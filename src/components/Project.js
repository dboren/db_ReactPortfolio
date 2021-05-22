import React from "react";

const Project = (props) => {
    return (

        <content class="container">
        <div class="row mt-3 border">
            <div class="col">
                <img src="https://github.com/dboren/db_UpdatedPortfolio2/blob/main/Assets/Images/Curatio_Screencap.JPG?raw=true" class="img-fluid" alt="Screenshot of Non-Profit Locator"></img>
            </div>
            <div class="col">
                <h2>Curatio</h2>
                <p>This application utlizes the Youtube API and MapBox API to allow users to put together curated youtube video playlists for hobbies of their choice, after which they can continue to add personal notes to specific videos they have saved. This is a true full stack application which saves user accounts along with their hobbies, videos, and notes in a database</p>
                
                <p>Created in collaboration with Mark Lloyd, Kayleigh Hanna, and Kanna Vairavan</p>
                
                <a href="https://github.com/m-llo/Project-2-Team-6">Repository</a>
                
                <a href="https://stormy-river-69253.herokuapp.com">Depoloyed page</a>
            </div>
        </div>
    </content>

    );
};

export default Project;
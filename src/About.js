import React from "react";
import NavBar from "./NavBar";
import "./index.css"

function About () {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <h1 className="title">About</h1>
            <p className="wpar">This site compares and provides information on 2023 Ford F150 models.  This application was made by Jacob Sendzik as a project for the Flatiron School.  This app has no affiliation with Ford.  All credit for images and information goes to Ford.</p>
        </div>
    )
}

export default About
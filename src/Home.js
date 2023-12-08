import React from "react";
import TruckList from "./TruckList";
import NavBar from "./NavBar";

function Home () {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <h1>Home</h1>
            <h2>2023 Ford F150</h2>
            <p>Click the Models link above to view models.</p>
        </div>
        )
}

export default Home
import React from "react";
import NavBar from "./NavBar";
import TruckList from "./TruckList";

function Models () {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <h1 className="title">Models</h1>
            <main>
                <TruckList />
            </main>
        </>
    )
}

export default Models
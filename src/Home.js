import React from "react";
import TruckList from "./TruckList";
import NavBar from "./NavBar";

function Home () {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png" alt="ford" width={100}/>
            <h1>Home</h1>
            <h2>2023 Ford F150</h2>
            <p>Click the Models link above to view models.</p>
            
        </div>
        )
}

export default Home
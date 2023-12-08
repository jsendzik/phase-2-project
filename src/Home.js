import React from "react";
import NavBar from "./NavBar";
import "./index1.css"


function Home () {
    return (
        <div className="home">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png" alt="ford" width={200}/>
            <header>
                <NavBar />
            </header>
            
            <h1 className="title">Home</h1>
            <h2 className="title">2023 Ford F150</h2>
            <p className="wpar">Click the Models link above to view models.</p>
            
        </div>
        )
}

export default Home
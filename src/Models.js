import React from "react";
import NavBar from "./NavBar";
import TruckList from "./TruckList";
import { useState } from "react";

function Models () {
    const [trucks, setTrucks] = useState([])

    return (
        <>
            <header>
                <NavBar />
            </header>
            <h1 className="title">Models</h1>
            <main>
                <TruckList trucks={trucks} setTrucks={setTrucks}/>
                <h1 className="title">Create</h1>
                <form className="form">
                <div>
                    <label>Truck Model Name:</label>
                    <input id="name" type="text" placeholder="Example: XLT, Lariat, ..etc"/>
                </div>
                <div>
                    <label>Starting Price:</label>
                    <input id="price" type="text" placeholder="Example: $29,999" />
                </div>
                <button type="submit">Create Truck</button>
                </form>
            </main>
        </>
    )
}

export default Models
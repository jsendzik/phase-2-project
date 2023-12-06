import React from "react";
import { useState } from "react";

function TruckList () {

    const [trucks, setTrucks] = useState([])

    function getTrucks() {
        fetch("http://localhost:3000/trucks")
        .then(r => r.json())
        .then((res)=> setTrucks(res))
    }

    return (
        <div>
            <button onClick={getTrucks}>Show Trucks</button>
            {trucks.map((truck) => {
                return (
                    <p>
                        <h3>{truck.name}</h3>
                        <img src={truck.image}/>
                        <label>Starting Price: ${truck.price}</label>
                    </p>

                )
            })}
        </div>
    )
}

export default TruckList
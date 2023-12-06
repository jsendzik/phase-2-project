import React, { useEffect } from "react";
import { useState } from "react";

function TruckList () {

    const [trucks, setTrucks] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/trucks")
        .then(r => r.json())
        .then((res)=> setTrucks(res))
        .catch((error) => alert(error))
    }, [])
        

    return (
        <>
            {trucks.map((truck) => {
                return (
                    <div key={truck.id}>
                        <p>{truck.name}</p>
                        <img src={truck.image} alt={truck.name}/>
                        <label>Starting Price: ${truck.price}</label>
                    </div>

                )
            })}
        </>
    )
}

export default TruckList
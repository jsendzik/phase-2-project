import React from "react";

function TruckList ({trucks}) {

  



    return (
        <div className="par">
            {trucks.map((truck) => {
                return (
                    <div key={truck.id}>
                        <p>{truck.name}</p>
                        <img src={truck.image} alt={truck.name}/>
                        <label>Starting Price: ${truck.price}</label>
                    </div>

                )
            })}
        </div>
    )
}

export default TruckList
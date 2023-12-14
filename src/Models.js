import React from "react";
import NavBar from "./NavBar";
import TruckList from "./TruckList";
import { useState, useEffect } from "react";
import TruckForm from "./TruckForm";

function Models () {
    const [trucks, setTrucks] = useState([])
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [url, setUrl] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/trucks")
        .then(r => r.json())
        .then((res)=> setTrucks(res))
        .catch((error) => alert(error))
    }, [])
        

    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handlePriceChange(e) {
        setPrice(e.target.value)
    }
    function handleImageChange(e) {
        setUrl(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault();
        fetch("http://localhost:3000/trucks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                name,
                price,
                image: url,
              })
        })
        .then(r => r.json())
        .then(truck => {
            const newTruck = truck;
            setTrucks((prevTrucks) => [...prevTrucks, newTruck]);
            setName("");
            setPrice("");
            setUrl("");
        })
        .catch(e => alert(e))
    }

    return (
        <>
            <header>
                <NavBar />
            </header>
            <h1 className="title">Models</h1>
            <main>
                <TruckList trucks={trucks} setTrucks={setTrucks}/>
                <TruckForm 
                    handleSubmit={handleSubmit} 
                    handleImageChange={handleImageChange}
                    handleNameChange={handleNameChange}
                    handlePriceChange={handlePriceChange}
                    name={name}
                    url={url}
                    price={price}
                    />
            </main>
        </>
    )
}

export default Models
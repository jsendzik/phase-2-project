import React from "react";
import NavBar from "./NavBar";
import TruckList from "./TruckList";
import { useState, useEffect } from "react";

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
                <h1 className="title">Create</h1>

                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <label>Truck Model Name: </label>
                        <input id="name" type="text" placeholder="Example: XLT, Lariat, ..etc" onChange={handleNameChange} value={name}/>
                    </div>
                    <div>
                        <label>Image URL: </label>
                        <input id="image" type="text" placeholder="URL" onChange={handleImageChange} value={url}/>
                    </div>
                    <div>
                        <label>Starting Price: </label>
                        <input id="price" type="text" placeholder="Example: $29,999" onChange={handlePriceChange} value={price}/>
                    </div>
                    <button type="submit">Create Truck</button>
                </form>
            </main>
        </>
    )
}

export default Models
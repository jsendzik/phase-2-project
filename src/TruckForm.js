import React from "react";

function TruckForm ({handleSubmit, handleImageChange, handleNameChange, handlePriceChange, name, url, price}) {
    return (
        <form className="form" onSubmit={handleSubmit}>
        <h2>Create</h2>
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
    )
}

export default TruckForm
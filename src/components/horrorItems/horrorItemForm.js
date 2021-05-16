import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"
import { addHorrorItem } from "../../modules/HorrorItemManager"
import "./horrorItemForm.css"

export const HorrorItemForm = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("app_user_id"))

    const [horrorItem, setHorrorItem] = useState({
        title: "",
        releaseDate: "",
        description: "",
        categoryId: 0,
        userId: parseInt(currentUser),
        img: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const [horrorCategory, setHorrorCategory] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newHorrorItem = { ...horrorItem }
        let selectedVal = event.target.value 

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newHorrorItem[event.target.id] = selectedVal
        setHorrorItem(newHorrorItem)
    }

    useEffect(() => {
        
    }, []);

    const handleClickSaveHorrorItem = (event) => {
        event.preventDefault()
    const newHorrorItemObject ={
        title: horrorItem.title,
        releaseDate: horrorItem.releaseDate,
        description: horrorItem.description,
        categoryId: horrorItem.categoryId,
        userId: parseInt(sessionStorage.getItem("app_user_id")),
        img: horrorItem.img
    }
        if (horrorCategory === 0) {
            window.alert("Boo! Don't forget your category!")
        } else {
            addHorrorItem(newHorrorItemObject)
            .then(() => history.push("/"))
        }
    }

    return (
        <form className="horrorItemForm">
            <h2 className="horrorForm-title">New Post</h2>
            <fieldset>
            <div className="form-section">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Title" value={horrorItem.title} />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-section">
                    <label htmlFor="releaseDate">Release Year</label>
                    <input type="text" id="releaseDate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="date" value={horrorItem.releaseDate} />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-section">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="desc" value={horrorItem.description} />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-section">
                    <label htmlFor="category">Choose a Category</label>
                    <select value={horrorItem.categoryId} name="categoryId" id="categoryId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a Category</option>
                        {horrorCategory.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                        <option value="1" color="#FFC15E">Movie</option>
                        {horrorCategory.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                        <option value="2">Show</option>
                        {horrorCategory.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                        <option value="3">Game</option>
                        {horrorCategory.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                        <option value="4">Book</option>
                        {horrorCategory.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
            <div className="form-section">
                    <label htmlFor="img">Insert Image</label>
                    <input type="text" id="img" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="img" value={horrorItem.img} />
                </div>
            </fieldset>
            <button type="button" className="postButton" onClick={handleClickSaveHorrorItem}>Post</button>
        </form>
    )
}
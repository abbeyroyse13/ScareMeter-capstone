import React, { useState, useEffect } from "react"
import { propTypes } from "react-bootstrap/esm/Image";
import { useHistory, useParams } from "react-router";
import HorrorItemManager from "../../modules/HorrorItemManager"

export const HorrorItemEditForm = () => {
    const [horrorItem, setHorrorItem] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const { horrorItemId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...horrorItem };
        stateToChange[evt.target.id] = evt.target.value;
        setHorrorItem(stateToChange);
    };

    const updateExistingHorrorItem = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedHorrorItem = {
            id: propTypes.match.params.horrorItemId,
            title: horrorItem.title,
            releaseDate: horrorItem.releaseDate,
            description: horrorItem.description,
            categoryId: horrorItem.categoryId,
            userId: parseInt(sessionStorage.getItem("app_user_id")),
            img: horrorItem.img
        };

        HorrorItemManager.update(editedHorrorItem)
            .then(() => history.push("/horrorPosts")
            )
    }

    useEffect(() => {
        HorrorItemManager.getHorrorItemById(horrorItemId)
            .then(horrorItem => {
                setHorrorItem(horrorItem);
                setIsLoading(false);
            });
    }, []);

    return (
        <form className="horrorItemForm">
            <h2 className="horrorForm-title">Edit Post</h2>
            <fieldset>
            <div className="form-section">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Title" value={horrorItem.title} />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-section">
                    <label htmlFor="releaseDate">Release Year</label>
                    <input type="text" id="releaseDate" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="date" value={horrorItem.releaseDate} />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-section">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="desc" value={horrorItem.description} />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-section">
                    <label htmlFor="category">Choose a Category</label>
                    <select value={horrorItem.categoryId} name="categoryId" id="categoryId" onChange={handleFieldChange} className="form-control" >
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
                    <input type="text" id="img" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="img" value={horrorItem.img} />
                </div>
            </fieldset>
            <button type="button" className="postButton" onClick={updateExistingHorrorItem}>Save</button>
        </form>
    );
}
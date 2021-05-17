import React from "react"
import { Link, useHistory } from "react-router-dom"
import { addHorrorFavorite, deleteHorrorItem } from "../../modules/HorrorItemManager"

export const HorrorCard = ({ horrorItem, handleDeleteHorrorItem }) => {

    const history = useHistory();

    const createNewHorrorFavorite = () => {
        addHorrorFavorite({
            horrorItemId: horrorItem.id,
            userId: parseInt(sessionStorage.getItem("app_user_id"))
        }).then(() => history.push("/horrorList"))
    }

    return (
        <ul className="horror-card">
            <li className="horror-card-content">
                <Link to={`/horrorDetail/${horrorItem.id}`}><img src={horrorItem.img} alt="horror item pic" className="horror-image" /></Link>
                <button type="button" className="save-btn" onClick={createNewHorrorFavorite} >Save</button>
                {(horrorItem.userId === parseInt(sessionStorage.getItem("app_user_id")))?<><button type="button" className="delete-btn" onClick={() => handleDeleteHorrorItem(horrorItem.id)} >-</button>
                <Link to={`/horrorPosts/${horrorItem.id}/edit`}>
                <button type="button" className="edit-btn" >Edit</button>
                </Link></>:""}
                <img src="" alt="horror category icon" className="horror-icon" />
            </li>
        </ul>
    )
}
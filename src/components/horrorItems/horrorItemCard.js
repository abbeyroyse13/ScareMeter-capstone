import React from "react"
import { Link, useHistory } from "react-router-dom"
import { useParams } from "react-router"
import { useState } from "react-router-dom"
import { MyHorrorList } from "../nav/myList"
import { addHorrorFavorite, updateExistingHorrorItem } from "../../modules/HorrorItemManager"

export const HorrorCard = ({ horrorItem }) => {
    // create function to make new user item 
    // with current user id & horror item id 
    // post new user item to database 
    // redirect user to my list

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
                <Link to={`/horrorDetail/${horrorItem.id}`}><img src={horrorItem.img} alt="horror item image" className="horror-image" /></Link>
                <button type="button" className="save-btn" onClick={createNewHorrorFavorite} >Save</button>
                {console.log(horrorItem.userId, sessionStorage.getItem("app_user_id"))}
                {(horrorItem.userId === parseInt(sessionStorage.getItem("app_user_id")))?<><button type="button" className="delete-btn" onClick={null} >-</button>
                <Link to={`/horrorPosts/${horrorItem.id}/edit`}>
                <button type="button" className="edit-btn" >Edit</button>
                </Link></>:""}
                <img src="" alt="horror category icon" className="horror-icon" />
            </li>
        </ul>
    )
}
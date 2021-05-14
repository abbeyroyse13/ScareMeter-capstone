import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"
import { deleteHorrorItem, getAllHorrorPosts } from "../../modules/HorrorItemManager";
import { HorrorCard } from "../horrorItems/horrorItemCard";
import { HorrorItemForm } from "../horrorItems/horrorItemForm"

export const HorrorPosts = () => {
    const [horrorItems, setHorrorItems] = useState([]);
    const getCurrentUser = JSON.parse(sessionStorage.getItem("app_user_id"))

    const getHorrorPosts = () => {
        return getAllHorrorPosts(getCurrentUser).then(ItemsFromAPI => {
            setHorrorItems(ItemsFromAPI)
        });
    };

    const handleDeleteHorrorItem = id => {
        deleteHorrorItem(id)
            .then(() => getAllHorrorPosts().then(setHorrorItems));
    }

    useEffect(() => {
        getHorrorPosts();
    }, []);

    return (
        <>
            <div>
                {horrorItems.map(horrorItemPost => 
                    { return <HorrorCard key={horrorItemPost.id} horrorItem={horrorItemPost}/> })}
            </div>
        </>
    )
}
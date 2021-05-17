import React, { useState, useEffect } from "react"
import { getAllHorrorPosts } from "../../modules/HorrorItemManager";
import { HorrorCard } from "../horrorItems/horrorItemCard";

export const HorrorPosts = () => {
    const [horrorItems, setHorrorItems] = useState([]);
    const getCurrentUser = JSON.parse(sessionStorage.getItem("app_user_id"))

    const getHorrorPosts = () => {
        return getAllHorrorPosts(getCurrentUser).then(ItemsFromAPI => {
            setHorrorItems(ItemsFromAPI)
        });
    };

    useEffect(() => {
        getHorrorPosts();
    }, []);

    return (
        <>
            <div>
                {horrorItems.map(horrorItemPost => 
                    { return <HorrorCard key={horrorItemPost.id} horrorItem={horrorItemPost}/> 
                    })}
            </div>
        </>
    )
}
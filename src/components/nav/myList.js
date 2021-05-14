import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"
import { getAllHorrorItems, getAllHorrorItemFavorites } from "../../modules/HorrorItemManager";
import { HorrorCard } from "../horrorItems/horrorItemCard";

  export const MyHorrorList = () => {
    const [horrorItems, setHorrorItems] = useState([]);
    const [horrorItemFavorites, setHorrorItemFavorites] = useState([]); 

    const getHorrorItems = () => {
        return getAllHorrorItems().then(ItemsFromAPI => {
            setHorrorItems(ItemsFromAPI)
        });
    };

    const getHorrorItemFavorites = () => {
        return getAllHorrorItemFavorites().then(ItemsFromAPI => {
            setHorrorItemFavorites(ItemsFromAPI)
        });
    };

    useEffect(() => {
        getHorrorItems()
        getHorrorItemFavorites()
    }, []);
    
    useEffect(() => {
        console.log("testing", filteredFavorites)
    }, []);

    useEffect(() => {
        getHorrorItems()
        getHorrorItemFavorites()
    }, [horrorItemFavorites]);

    // check filtering 
    // if user has saved an item once, they shouldn't be able to save again

    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))

    const filteredFavorites = horrorItemFavorites.filter(favorite => favorite.userId === currentUserId)

    const filteredHorrorItems = horrorItems.filter(horrorItem => horrorItem.userId === currentUserId)

        return (
            <>
            <div className="horrorItem-container">
                {filteredHorrorItems.map(horrorItem =>
                    <HorrorCard
                        key={horrorItem.id}
                        horrorItem={horrorItem} 
                        />)}
            </div>
        </>
        )
    }
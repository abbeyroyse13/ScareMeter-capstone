import React, { useState, useEffect } from "react"
import { getAllHorrorItems, getAllHorrorItemFavorites, deleteHorrorItem } from "../../modules/HorrorItemManager";
import { HorrorCard } from "../horrorItems/horrorItemCard";

export const MyHorrorList = () => {
    const [horrorItems, setHorrorItems] = useState([]);
    const [horrorItemFavorites, setHorrorItemFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const getHorrorItems = () => {
        return getAllHorrorItems().then(ItemsFromAPI => {
            setHorrorItems(ItemsFromAPI)
        });
    };

    const handleDeleteHorrorItem = id => {
        deleteHorrorItem(id)
            .then(() => getAllHorrorItems().then(setHorrorItems));
    }

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
    }, []);

    useEffect(() => {
        getHorrorItems()
        getHorrorItemFavorites()
    }, []);

    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))

    let filteredFavorites = horrorItemFavorites.filter(favorite => favorite.userId === currentUserId)

    let temp = []

    filteredFavorites.forEach(element => {
        let num = true 
        for (let i = 0; i < temp.length; i++){
            if (temp[i].horrorItem.id === element.horrorItem.id){
                num = false 
            }
        } 
        if (num){temp.push(element)}
        return true 
    });

    return (
        <>
            <div className="horrorItem-container">
                {temp.map(horrorItem =>
                    <HorrorCard
                        key={horrorItem.id}
                        horrorItem={horrorItem.horrorItem}
                        handleDeleteHorrorItem={handleDeleteHorrorItem} />)}
            </div>
        </>
    )
}
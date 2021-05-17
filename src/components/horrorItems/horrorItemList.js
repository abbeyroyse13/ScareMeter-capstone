import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"
import { deleteHorrorItem, getAllHorrorItems } from "../../modules/HorrorItemManager";
import { HorrorCard } from "./horrorItemCard";

export const HorrorList = () => {
    const [horrorItems, setHorrorItems] = useState([]);
    const [filterItems, setFilterItems] = useState([]);

    const getHorrorItems = () => {
        return getAllHorrorItems().then(ItemsFromAPI => {
            setHorrorItems(ItemsFromAPI)
            setFilterItems(ItemsFromAPI)
        });
    };

    const handleDeleteHorrorItem = id => {
        debugger
        deleteHorrorItem(id)
            .then(() => getAllHorrorItems()
            )
    }

    useEffect(() => {
        getHorrorItems();
    }, []);

    const handleMediumOnClick = evt => {
        evt.preventDefault()
        setFilterItems(
            horrorItems.filter(item => {
                if (item.categoryId === parseInt(evt.target.id)) {
                    return item
                }
            }))
    }

    return (
        <>
            <div className="sideBar">
                <div><img src="" alt="movie logo" id="Movies" /><div onClick={handleMediumOnClick} id="1">Movies</div></div>
                <div><img src="" alt="show logo" id="Shows" /> <div onClick={handleMediumOnClick} id="2">Shows</div></div>
                <div><img src="" alt="game logo" id="Games" /> <div onClick={handleMediumOnClick} id="3">Games</div></div>
                <div><img src="" alt="book logo" id="Books" /> <div onClick={handleMediumOnClick} id="4">Books</div></div>
            </div>
            <div className="horrorItem-container">
                {filterItems.map(horrorItem =>
                    <HorrorCard
                        key={horrorItem.id}
                        horrorItem={horrorItem}
                        handleDeleteHorrorItem={handleDeleteHorrorItem} />)}
            </div>
        </>
    )
}
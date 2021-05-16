import React, { useState, useEffect } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import { getHorrorItemById } from "../../modules/HorrorItemManager"
import ProgressBar from "react-bootstrap/ProgressBar"

export const HorrorItemDetail = () => {
    const [horrorItem, setHorrorItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { horrorItemId } = useParams();
    console.log(horrorItemId)
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", horrorItemId)
        getHorrorItemById(horrorItemId)
            .then(horrorItem => {
                setHorrorItem(horrorItem)
                setIsLoading(false);
            });
    }, []);

    return (
        <section className="horrorDetail">
            <h3 className="horrortitle"> {horrorItem.title} </h3>
            <div className="releaseDate"> {horrorItem.releaseDate} </div>
            <div className="description"> {horrorItem.description} </div>
            <div className="horrorCategory"> {horrorItem.category} </div>
            <img src={horrorItem.img} className="horrorImg" />
            <ProgressBar min={25} max={100} now={50} animated variant="success"/>
            <button onClick={null} type="btn" >SCAREME!</button>
        </section>
    );
};
import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/homepage"
import { HorrorList } from "./horrorItems/horrorItemList"
import { MyHorrorList } from "./nav/myList"
import { HorrorItemForm } from "./horrorItems/horrorItemForm"
import { HorrorItemDetail } from "./horrorItems/horrorItemDetails"
import { HorrorPosts } from "./nav/myPosts"

// don't forget to add links to other pages later

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/horrorItems">
                <HorrorList />
            </Route>

            <Route exact path="/horrorItems/add">
                <HorrorItemForm />
            </Route>

            <Route exact path="/horrorDetail/:horrorItemId(\d+)">
                <HorrorItemDetail />
            </Route>

            <Route exact path="/horrorPosts">
                <HorrorPosts />
            </Route>

            <Route exact path="/horrorList">
                <MyHorrorList />
            </Route>
        </>
    )
}
const remoteURL = "http://localhost:8088"

export const getAllHorrorItems = (getCurrentUser) => {
    return fetch (`${remoteURL}/horrorItems/?userId=${getCurrentUser}`)
    .then(response => response.json())
}

export const getHorrorItemById = (id) => {
    return fetch (`${remoteURL}/horrorItems/${id}?_embed=userItems`)
    .then(response => response.json())
}

export const addHorrorItem = (newHorrorItem) => {
    return fetch(`${remoteURL}/horrorItems`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newHorrorItem)
    }).then(response => response.json())
}

export const deleteHorrorItem = (id) => {
    return fetch(`${remoteURL}/horrorItems/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}
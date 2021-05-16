const remoteURL = "http://localhost:8088"

export const getAllHorrorItems = () => {
    return fetch (`${remoteURL}/horrorItems`)
    .then(response => response.json())
}

export const getAllHorrorPosts = (getCurrentUser) => {
    return fetch (`${remoteURL}/horrorItems/?userId=${getCurrentUser}`)
    .then(response => response.json())
}

export const getAllHorrorItemFavorites = () => {
    return fetch (`${remoteURL}/horrorItemFavorites`)
    .then(response => response.json())
}

export const addHorrorFavorite = (newHorrorFavorite) => {
    return fetch(`${remoteURL}/horrorItemFavorites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newHorrorFavorite)
    }).then(response => response.json())
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
    }).then(response => response.json())
}

export const updateExistingHorrorItem = (editedHorrorItem) => {
    return fetch(`${remoteURL}/horrorItems/${editedHorrorItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedHorrorItem)
    }).then(data => data.json());
  }
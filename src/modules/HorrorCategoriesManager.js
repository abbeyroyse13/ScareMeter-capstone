export const getAllHorrorCategories = () => {
    return fetch (`${remoteURL}/horrorCategories`)
    .then(response => response.json())
}
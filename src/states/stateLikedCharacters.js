
const LIKED_CHARACTERS_KEY = 'char_key';

export const stateLikedCharacters = (id, liked) => {
        const likedObject = JSON.parse(localStorage.getItem(LIKED_CHARACTERS_KEY)) || {};
        console.log(likedObject);
        likedObject[id] = !liked;
        localStorage.setItem(LIKED_CHARACTERS_KEY, JSON.stringify(likedObject));
}
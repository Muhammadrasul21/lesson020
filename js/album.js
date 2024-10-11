const wrapper = document.querySelector(".wrapper");
const API_ALBUMS = "https://jsonplaceholder.typicode.com/albums";
getData(API_ALBUMS, createAlbumCard);

async function getData(api, callback) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        callback(data);
    } catch (err) {
        console.log(err);
    }
}
function createAlbumCard(data) {
    data.forEach(album => {
        let div = document.createElement("div");
        div.className = "card album-card";
        div.innerHTML = `
            <h3 class = "title album" >Album: ${album.title}</h3>`;
        wrapper.appendChild(div);
    });
}

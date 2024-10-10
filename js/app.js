const wrapper = document.querySelector(".wrapper");

const API_LINK = "https://jsonplaceholder.typicode.com/posts";

getData(API_LINK, createPostCard);

async function getData(api, callback) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        callback(data);
    } catch (err) {
        console.log(err);
    }
}

function createPostCard(data) {
    data.forEach(post => {
        let div = document.createElement("div");
        div.className = "card post-card";
        div.innerHTML = `
            <h3 class = "title">${post.title}</h3>
            <p class = "item">${post.body}</p>`;
        wrapper.appendChild(div);
    });
}

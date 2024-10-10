const wrapper = document.querySelector(".wrapper")

const API_LINK = "https://jsonplaceholder.typicode.com/posts"

async function getData(api) {
    const response = await fetch(api)
    response
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
}
getData(API_LINK)


function createCard(data) {
    data.forEach(post => {
        let div = document.createElement("div")
        div.className = "card"
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>`
        wrapper.appendChild(div)

    });
}
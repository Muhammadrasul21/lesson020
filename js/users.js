const wrapper = document.querySelector(".wrapper");

const API_USERS = "https://jsonplaceholder.typicode.com/users";

getData(API_USERS, createUserCard);

async function getData(api, callback) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        callback(data);
    } catch (err) {
        console.log(err);
    }
}

function createUserCard(data) {
    data.forEach(user => {
        let div = document.createElement("div");
        div.className = "card user-card";
        div.innerHTML = `
            <h3 class = "title" >User: ${user.name}</h3>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p class = "item" >Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p>Geo: Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</p>
            <p class = "item" >Company: ${user.company.name}</p>`;
        wrapper.appendChild(div);
    });
}

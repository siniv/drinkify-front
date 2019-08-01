import axios from 'axios';
const baseurl = "/api/toolshed";

export function getItems(callback) {
    axios.get(baseurl)
        .then(function (items) {
            callback(items.data);
        });
}

// Tämä hakee Itemsit kategoriavalinnan mukaan. ItemSort lähettää kategorian tähän
// Kategoria tulee ItemSOrtFormista ja täytyy matchata ItemFormissa tavaralle annettavaan kategoriaan.
export function getSortedItems(callback, category) {
    axios.get(baseurl + '\\byCategory?haku=' + category)
        .then(function (sorteditems) {
            callback(sorteditems.data);
        });
}

export function createItem(item, callback) {
    axios.post(baseurl, item)
        .then(function (response) {
            console.dir(response);
            callback(response.status);
        });
}

export function getUser(callback, email) {
    axios.get("/api/user/getbyemail/" + email)
        .then(function (user) {
            callback(user);
        });
}

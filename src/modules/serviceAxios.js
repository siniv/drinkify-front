import axios from 'axios';
const baseurl = "/api/toolshed";

// export function haeLista(callback) {
//     axios.get(baseurl)
//         .then(function (lista) {
//             callback(lista.data);
//         });
// }
export function getItems(callback) {
    axios.get(baseurl)
        .then(function (items) {
            callback(items.data);
        });
}

// export function luosanonta(sanonta, callback) {
//     axios.post(baseurl, sanonta)
//         .then(function (response) {
//             console.dir(response);
//             callback(response.status);
//         });
// }
export function createItem(item, callback) {
    axios.post(baseurl, item)
        .then(function (response) {
            console.dir(response);
            callback(response.status);
        });
}

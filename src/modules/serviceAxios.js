import axios from 'axios';
const baseurl = "/api/toolshed";

export function getItems(callback) {
    axios.get(baseurl)
        .then(function (items) {
            callback(items.data);
        });
}

export function createItem(item, callback) {
    axios.post(baseurl, item)
        .then(function (response) {
            console.dir(response);
            callback(response.status);
        });
}

export function getKuva(callback){
    axios.get("/photos/5d414dfd3ad8603fb88d093b")
        .then(function(photos) {
            console.log(photos)
            callback(photos.data.image.data);
        });
}
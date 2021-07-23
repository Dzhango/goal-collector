const fetch = require('node-fetch');
global.fetch = fetch;
const dotenv = require("dotenv");
dotenv.config();
const { createApi } = require('unsplash-js');

const access_key = process.env.ACCESS_KEY;
const secret_key = process.env.SECRET_KEY;


const fetchUnsplash = (title) => {
    const unsplash = createApi({
        accessKey: access_key,
        fetch: fetch,
    });

    const params = {
        query: title,
        orientation: "landscape"
    }
    // let url = ""

    return unsplash.search
        .getPhotos(params)
        .then(result => {
            return result.response.results[0].urls.small;
        })
        .catch(() => {
            console.log('something went wrong!');
        })

    // return url;
}



module.exports.fetchUnsplash = fetchUnsplash;
const axios = require("axios");

function airQualityCallback(url, callback) {
  axios
    .get(url)
    .then((resp) => callback(null, resp.data))
    .catch((err) => callback(err, null));
}

function airQualityPromise(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((resp) => resolve(resp.data))
      .catch((err) => reject(err));
  });
}

module.exports = { airQualityCallback, airQualityPromise };

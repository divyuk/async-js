const {
  airQualityCallback,
  airQualityPromise,
} = require("../helpers/airQuality");

const airQulaity = require("express").Router(); // airQuality Router

let url = "https://api.openaq.org/v2/latest";

// Applying custom created route get method
airQulaity.get("/callback", (req, res) => {
  airQualityCallback(url, (err, resp) => {
    return err
      ? res.status(500).json({ error: err })
      : res.status(200).json(resp);
  });
});

airQulaity.get("/promise", (req, res) => {
  airQualityPromise(url)
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(500).json({ error: err }));
});

airQulaity.get("/asyncawait", async (req, res) => {
  try {
    let resp = await airQualityPromise(url);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = airQulaity;

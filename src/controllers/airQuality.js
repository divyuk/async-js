const {
  airQualityCallback,
  airQualityPromise,
} = require("../helpers/airQuality");
const URLSearchParams = require("url-search-params");
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
    return res.status(200).json(resp);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

//! Callback Hell
airQulaity.get("/callbackhell", (req, res) => {
  let payload = { page: 1 };
  const searchParams = new URLSearchParams(payload);
  let total = [];
  airQualityCallback(`${url}?${searchParams}`, (err, resp1) => {
    if (err) return res.status(500).json({ error: err });
    else {
      payload.page += 1;
      const searchParams2 = new URLSearchParams(payload);
      airQualityCallback(`${url}?${searchParams}`, (err, resp2) => {
        if (err) return res.status(500).json({ error: err });
        else {
          payload.page += 1;
          const searchParams3 = new URLSearchParams(payload);
          airQualityCallback(`${url}?${searchParams}`, (err, resp3) => {
            if (err) return res.status(500).json({ error: err });
            else {
              total.push(resp1);
              total.push(resp2);
              total.push(resp3);
              return res.status(200).json(total);
            }
          });
        }
      });
    }
  });
});

module.exports = airQulaity;

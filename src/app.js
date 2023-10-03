const express = require("express");
const airQulaity = require("./controllers/airQuality");
const app = express();
const router = express.Router(); // to make a custom route we use this router
const PORT = 3000;
app.use(router); // middleware to set router

app.get("/", (req, res) => {
  res.status(200).json("Welcome to async Programming!");
});

router.use("/airQualities", airQulaity); // middleware to use custom created route /airQualities

app.listen(PORT, (err) => {
  if (err) console.log("Something went wrong...");
  else console.log("Server running on the PORT 3000");
});

const express = require("express");
const app = express();
const router = express.Router();
const PORT = 3000;
app.use(router);

router.get("/", (req, res) => {
  res.status(200).json("Welcome to async Programming!");
});

// router.get("/airQualities", airQulaity);

app.listen(PORT, (err) => {
  if (err) console.log("Something went wrong...");
  else console.log("Server running on the PORT 3000");
});

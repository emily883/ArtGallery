const { Router } = require("express");
const router = Router();
const Art = require("../controllers/artControllers.js");

router.get("/all", async (req, res) => {
  res.send(await new Art().all());
});

router.post("/get", async (req, res) => {
  res.send(await new Art().get(parseInt(req.query.id)));
})

module.exports = router;

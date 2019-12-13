const router = require("express").Router();

const Resources = require("./resourceModel");

router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => {
      if (resources) {
        res.status(200).json(resources);
      } else {
        res.status(404).json({ message: "We don't have any resources" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

module.exports = router;

const router = require("express").Router();

router.get("/", require("./controller").getAll);
router.post("/", require("./controller").addOne);
router.put("/", require("./controller").updateOne);
router.delete("/", require("./controller").deleteOne);

module.exports = router;
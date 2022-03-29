const express = require("express");

// const { filesMiddleware } = require("../middlewares");
const { superheroes: ctrl } = require("../controllers");

const router = express.Router();

router.post(
  "/",
  // filesMiddleware.array("images"),
express.json(),
// (req, res, next) => {
//       console.log("API POST REQUEST");
//       console.log("REQ FILE :" , req.files);
//       console.log("REQ BODY :" , req.body);
      
//       next();   
//     },
  ctrl.add
);
router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);


router.put("/:id", express.json(), ctrl.update);

router.delete("/:id", ctrl.del);

module.exports = router;

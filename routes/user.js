var express = require("express"),
  router = express.Router(),
  verifyToken = require('../middlewares/authJWT'),
  {
    signup,
    signin
  } = require("../controllers/auth.controller.js");

router.post("/register", signup, function (req, res) {

});

router.post("/login", signin, function (req, res) {

});

router.get("/hiddencontent", verifyToken, function (req, res) {
  if (!req.user) {
    res.status(401)
      .send({
        message: "Not Authenticated"
      });
  }
  
  else if (req.user.role == "admin") {
    res.status(200)
      .send({
        message: "Congratulations! but there is no hidden content"
      });
  } 
  else {
    console.log(req.user);
    res.status(403)
      .send({
        message: "Not Authorized"
      });
  }
});

module.exports = router;
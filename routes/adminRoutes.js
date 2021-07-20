const express = require("express");
const auth = require("../config/auth");
const { booking } = require("../controllers/bookingController");
const { uploadImage ,uploadOffer } = require("../controllers/uploadController");
const { deleteOffer, deleteImage } = require("../controllers/userController");
const router = express.Router();

router.post("/uploadImage",auth,uploadImage);
router.post("/setoffer",auth,uploadOffer);
router.post("/booking",booking)
router.get("/delete",auth,deleteOffer);
router.get("/deleteimage/:id",auth,deleteImage);

module.exports = router;
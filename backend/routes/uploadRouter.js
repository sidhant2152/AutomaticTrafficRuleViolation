const express = require("express");
const router = express.Router();

const { handleUpload } = require("../controllers/upload.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("data"), handleUpload);

module.exports = router;

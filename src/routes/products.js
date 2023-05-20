const express = require("express");

const router = express.Router();
const productsController = require("../controllers/products");
// Create -> post
router.post("/product", productsController.createProduct);
// read -> get
router.get("/product", productsController.getAllProducts);
//
// router.put("/product", (req, res, next) => {
//   res.json([
//     { nama: "efan bahr", asal: "Surabaya" },
//     { nama: "bahr", asal: "jatim" },
//   ]);
//   next();
// });
// router.delete("/product", (req, res, next) => {
//   res.json([
//     { nama: "efan bahr", asal: "Surabaya" },
//     { nama: "bahr", asal: "jatim" },
//   ]);
//   next();
// });
module.exports = router;

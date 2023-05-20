const db = require("../db/db.json");

exports.createProduct = (req, res, next) => {
  console.log("request :", req.body);
  res.json({
    message: "create product sukses",
    data: {
      id: 1,
      nama: "donat kacang",
      harga: 2000,
    },
  });
  next();
};
exports.getAllProducts = (req, res, next) => {
  res.json(db);

  next();
};
exports.getByTable = (req, res, next) => {
  console.log("quer", req.query);
  const endpoint = req.params.table;
  const data = db[endpoint];
  console.log("data", data);

  const keys = Object.keys(req.query);
  const key = keys[0];

  if (data) {
    if (keys.length) {
      console.log("req query jalan", req.query);
      const foundData = data.find((item) => item[key] === req.query[key]);

      foundData
        ? res.json(foundData)
        : res.send("tidak ada yang namanya " + req.query[key]);
    } else {
      res.json(data);
    }
  } else {
    res.send(`endpoint ${endpoint} not found`);
  }

  next();
};
exports.getById = (req, res, next) => {
  const table = req.params.table;
  const id = req.params.id;
  const data = db[table];
  if (data) {
    console.log("data", data);
    console.log("id", id);
    const response = data.find((item) => item.id.toString() === id.toString());
    console.log("res", response);
    res.json(response);
  } else {
    res.send(`endpoint ${endpoint} not found`);
  }

  next();
};

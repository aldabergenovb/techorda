const express = require("express");
const request = require("request");

const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/", (req, res) => {
  const url =
    "https://data.egov.kz/api/v4/perechen_sredstv_massovoi_inf2/v1?apiKey=54d796a2b9354e7fa31562694e1986e1";
  req.pipe(request(url)).pipe(res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

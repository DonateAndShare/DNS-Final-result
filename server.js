const express = require("express");
const cors = require("cors");
// const mongo = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/login", require("./server/login"));
app.use("/signup", require("./server/signup"));

app.use("/account", require("./server/account"));
app.use("/myItems", require("./server/myItems"));
app.use("/addItem", require("./server/addItem"));
app.use("/itemSlice", require("./server/itemSlice"));

app.use("/searchBar", require("./server/searchBar"));
app.use("/searchResult", require("./server/searchResult"));
app.use("/itemDetails", require("./server/itemDetails"));

app.use("/navBar", require("./server/navBar"));

app.use("/category", require("./server/category"));

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`)); 

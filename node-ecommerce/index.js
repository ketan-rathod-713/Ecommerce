const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const productRouters = require("./routes/Products");
const categoriesRouter = require("./routes/Category");
const brandsRouter = require("./routes/Brand");

// middlewares
app.use(cors({
    exposedHeaders: ["X-Total-Count"]
}))
app.use(express.json())
app.use("/products", productRouters.router)
app.use("/brands", brandsRouter.router)
app.use("/categories", categoriesRouter.router)

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/eccomerce');
    console.log("connected")
}

app.get("/", (req, res)=>{
    res.json({status: "success"})
})

app.listen(8080, ()=>{
    console.log("server started wow");
})

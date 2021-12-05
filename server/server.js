import express from "express";
import {readdirSync} from 'fs';
import cors from "cors";
import mongoose from "mongoose";
const morgan = require("morgan");
require("dotenv").config();
//fs is a module in node js
const app = express();
const URI=process.env.DATABASE;
//db connection
mongoose
.connect(URI).then(()=>console.log("DB Connected"))
.catch((err)=>console.log("DB Connection error:",err));

app.use(cors());//middlewares
app.use(morgan("dev"));
app.use(express.json());


readdirSync('./routes')
.map((r) =>app.use('/api', require(`./routes/${r}`))
);
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

const express = require("express");
const dotenv = require("dotenv");


// loading env
dotenv.config({ path: "./config/config.env" })

const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");


// connect to DB
connectDB();


const app = express();

// body-parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`We live in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`.green.bold));

// handle unhandle errors
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold)

    server.close(() => process.exit(1));
})
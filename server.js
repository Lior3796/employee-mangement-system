const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// loading env
dotenv.config({ path: "server/config/config.env" })

const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./server/config/db");
const employee = require("./server/routes/employee")

// connect to DB
connectDB();


const app = express();

// body-parser
app.use(express.json());
app.use(cors());



app.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

// routing
app.use("/employee", employee);

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}


const PORT = process.env.PORT;

const server = app.listen(PORT, () => console.log(`We live in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`.green.bold));

// handle unhandle errors
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold)

    server.close(() => process.exit(1));
})
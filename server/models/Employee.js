const mongoose = require("mongoose");
const slugify = require("slugify");

const EmployeeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, "Please add a ID"],
        validate: [(val) => val.length !== 9, "id must be 9 characters"],
    },
    Name: {
        type: String,
        required: [true, "Please add a name"],
        trim: true,
        maxlength: [50, "Name can not be more than 50 characters"],
        validate: [(val) => /^[a-zA-Z\s]*$/.test(val), "Please add a english letters only"]

    },
    email: {
        type: String,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email",
        ],
    },
    address: {
        type: String,
        required: [true, "Please add an address"]
    },
})

module.exports = mongoose.model('Employee', EmployeeSchema);
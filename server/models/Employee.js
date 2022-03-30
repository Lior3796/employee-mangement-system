const mongoose = require("mongoose");
const slugify = require("slugify");

const EmployeeSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: [true, "Please add a ID"],
        unique: true,
        length: [9,]

    },
    Name: {
        type: String,
        required: [true, "Please add a name"],
        unique: true,
        trim: true,
        maxlength: [50, "Name can not be more than 50 characters"],
    },
    slug: String,
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

EmployeeSchema.pre("save", function (next) {
    this.slug = slugify(this.name, { lower: true })
    next();
})


module.exports = mongoose.model('Employee', EmployeeSchema);
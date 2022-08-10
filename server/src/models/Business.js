const mongoose = require('mongoose')

const BusinessSchema = new mongoose.Schema({
    businessname: {
        type: String,
        required: true,
    },
    business_street: {
        type: String,
        required: true,
    },
    business_city: {
        type: String,
        required: true,
    },
    business_country: {
        type: String,
        required: true,
    },
    businessphone: {
        type: String,
        required: true,
    },
    businessemail: { 
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
      },
      profilePicture: {
        type: String,
        default: '',
      },
      coverPicture: {
        type: String,
        default: '',
      },
      followers: {
        type: Array,
        default: [],
      },
      following: {
        type: Array,
        default: [],
      },
})

module.exports = mongoose.model('Business', BusinessSchema)
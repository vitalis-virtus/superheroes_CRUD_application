const {Schema} = require("mongoose");

const superheroSchema = Schema({
    nickname: {
        type: String,
        required: [true, "Superhero must have a name"],
        unique: true
    },
    real_name: {
        type: String,
        unique: true
    },
    origin_description: {
        type: String,
        unique: false
    },
    superpowers: {
        type: String,
        unique: false
    },
    catch_phrase: {
        type: String,
        unique: false
    },
    // images:{
    //     type: [String],
    //     default: []
    // }
   
}, {versionKey: false, timestamps: true});

module.exports = superheroSchema;
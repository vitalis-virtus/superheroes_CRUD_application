const {model} = require("mongoose");

const {superheroSchema} = require("./schemas");

const Superhero = model("superheroe", superheroSchema);

module.exports = Superhero;
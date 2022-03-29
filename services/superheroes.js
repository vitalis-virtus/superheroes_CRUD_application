const {Superhero} = require('../models');

const getSuperheroes = (skip, limit) => Superhero.find({}).skip(skip).limit(limit);

const getById = (id) => Superhero.findById(id)

const add = (newHero) => {
    return Superhero.create(newHero)
}

const getSuperheroesNumber = () => Superhero.countDocuments({})

const update = (id, updateHero) => Superhero.findByIdAndUpdate(id, updateHero, {new: true});

const del = (id) => Superhero.findByIdAndDelete(id);

module.exports = {
    getSuperheroes,
    getSuperheroesNumber,
    getById,
    add,
    update,
    del
}

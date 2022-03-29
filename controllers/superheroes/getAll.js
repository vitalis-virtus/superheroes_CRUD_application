const {superheroes: service} = require("../../services");

const getAll = async (req, res, next) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1
        const limit = 5
        const skip = (page - 1) * limit;

        const total = await service.getSuperheroesNumber();
        const result = await service.getSuperheroes(skip, limit)

        res.json({
            status: "success",
            code: 200,
            data: {
                result,
                page,
                total
            }
        })
    }
    catch(error){
        next(error);
    }
};

module.exports = getAll;
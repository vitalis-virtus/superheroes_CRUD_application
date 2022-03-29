const {superheroes: service} = require("../../services");

const del = async(req, res, next) => {
    const {id} = req.params;
    try {
        const result = await service.del(id);
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    }
    catch(error){
        next(error);
    }
};

module.exports = del;
const { superheroes: service } = require("../../services");

const fs = require("fs").promises;
const path = require("path");
const superheroesDir = path.join(process.cwd(), "/upload/superheroes");



const add = async (req, res, next) => {
  try {
  //   if (!req.files) {
  //     const result = await service.add(req.body);
  //     return res.status(201).json({
  //       status: "success",
  //       code: 201,
  //       data: {
  //         result,
  //       },
  //     });
  //   }

  //   const files = req.files

  //   await fs.mkdir(`${superheroesDir}/${req.body.nickname}`);

  //   const filesArray = []

  //   files.forEach((file)=>{
  //   const { filename, path: tempPath } = file;
  //   if (tempPath) {
  //       const filePath = path.join(superheroesDir, req.body.nickname, filename);
  //        fs.rename(tempPath, filePath);
  //        filesArray.push(filePath)
  //     }
  // }
  // )
  //   req.body.images = [...filesArray]

    const result = await service.add(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    if (error.message.includes("validation failed")) {
      error.code = 400;
    }
    next(error);
  }
};

module.exports = add;

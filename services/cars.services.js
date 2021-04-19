'use strict';
// const schema = new Mongoose.Schema({ 
//     description: String,
// 	make: String,
//     model: String,
//     estimatedate: String,
//     id: Number,
//     image: String,
// });

function getAllCars () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve("¡Éxito!"), 200);
	});
}

module.exports = {
    getAllCars
}
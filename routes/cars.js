'use strict';
const carService = require('../services/cars.services');
const Mongoose = require("mongoose");

Mongoose.connect("mongodb+srv://admin:rf2zx6yhJDS8GCTn@markscluster0.w3vqg.mongodb.net/car-tech?retryWrites=true&w=majority")
    .then(db => console.log("DB connect"))
    .catch(err => console.log("error while connect to db", err))

const CarModel = Mongoose.model("car", { 
    description: String,
	make: String,
    model: String,
    estimatedate: String,
    id: Number,
    image: String,
    user: String,
});

module.exports = [
    {
        method: 'GET',
        path: '/carttech/api/cars',
        config: {
          handler: async (request, h) => {
            try {
                const carRes = await CarModel.find().exec();
                return h.response(carRes).code(200);
            } catch(error) {
                return h.response(error).code(500);
            }
          }
        }
    },
    {
        method: 'PUT',
        path: '/carttech/api/cars/{id}',
        config: {
          handler: async (request, h) => {
            try {
                let updateCar = request.payload;
                var options = { new: true }; 
                const carRes = await CarModel.findOneAndUpdate({ _id: request.params.id }, updateCar, options)
                return h.response(carRes).code(200);
            } catch(error) {
                return h.response("hardcode", error).code(500);
            }
          }
        }
    },
]
const Mongoose = require("mongoose");

export const schema = new Mongoose.Schema({ 
    description: String,
	make: String,
    model: String,
    estimatedate: String,
    id: Number,
    image: String,
});


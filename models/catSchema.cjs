const { Schema, model } = require('mongoose');


const CatSchema = new Schema({

    link: {
        type: String
    },
    breed: {
        type: String
    },
    food: {
        type: String
    },
    toy: {
        type: String
    },
    advice: {
        type: String
    },
   
},  {

});


const Cat = model('Cat', CatSchema);

module.exports = Cat;
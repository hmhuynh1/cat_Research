const { Schema, model } = require('mongoose');


const CatSchema = new Schema({
    picture: {
        type: String
    },
    link: {
        type: String
    },
    breed: {
        type: String
    },
    foodtoy: {
        type: String
    },
    advice: {
        type: String
    },
   
},  {

});


const Cat = model('Cat', CatSchema);

module.exports = Cat;
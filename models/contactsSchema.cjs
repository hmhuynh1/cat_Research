const { Schema, model } = require('mongoose');

const contactsSchema = new Schema({

    firstName: {
        type: String
    }, 
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    comment: {
        type: String
    } 

},  {

});

const Contacts = model('Contacts', contactsSchema);

module.exports = Contacts;
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT ?? 3001;
const mongoose = require("mongoose");
const User = require("./models/userSchema.cjs")
const Cat = require("./models/catSchema.cjs")
const Contacts = require("./models/contactsSchema.cjs")
const cors = require("cors")
//middleware
// parse requests of content-type - application/json
app.use(cors())
app.use(express.static('dist'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main().catch(err => console.log(err));


async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('start of main')
}


app.get('/todo', async (req, res) => {
    const result = await Todo.find();
    res.json(
        result
    )
})


app.get('/hello', async (req, res) => {

    res.json(
        {
            message: "hello"
        }
    )
})



app.post('/signup', async (req, res) => {

    const result = await User.create({
        email: req.body.email,
        password: req.body.password
    })
    console.log("signup:", result)
    res.json({
        message: result,

    });

})

app.post("/login", async (req, res) => {
    //email and password

    try {
        let newEmail = req.body.email;
        const user = await User.findOne({ email: newEmail }).select(
            "+password"
        );

        if (!user) {
            throw "user not found";
        }


        if (user) {
            //check password
            console.log(user.password, req.body.password);
            if (user.password === req.body.password) {
                res.json({
                    message: "login successful",
                    user: {
                        _id: user._id.valueOf(),
                        email: user.email,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        permission: user.permission,
                    },
                });
            } else {
                throw "incorrect password";
            }
        }
    } catch (err) {
        console.log(err);
        res.json({
            message: err,
        });
    }
});



app.delete('/todo/:id', async (req, res) => {

    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
})

app.put("/todo/:id", async (req, res) => {
    var query = { '_id': req.params.id };
    const update = {
        ...req.body
    };

    let results = await Todo.findOneAndUpdate(query, update, { upsert: true });
    results = await Todo.findOne(query);

    res.json({
        success: true,
        data: results,
    });

})

app.post('/cat', async (req, res) => {
    const result = await Cat.create({
        link: req.body.link,
        breed: req.body.breed,
        food: req.body.food,
        toy: req.body.toy,
        advice: req.body.advice
    })
    res.json(result)
})

app.get('/cat', async (req, res) => {
    const result = await Cat.find();
    res.json(
        result
    )
})

app.post('/contacts', async (req, res) => {
    const result = await Contacts.create({
        firstName: req.body.first,
        lastName: req.body.last,
        email: req.body.email,
        comment: req.body.comment,

    })
    res.json(result)
})




const listener = app.listen(port, () => {
    console.log('Server started at http://localhost:' + listener.address().port);
})

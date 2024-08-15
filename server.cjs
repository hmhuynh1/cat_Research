require('dotenv').config();
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = process.env.PORT ?? 3000;
console.log(process.env.NICK)
const mongoose = require("mongoose");
const User = require("./models/userSchema.cjs")
const Cat = require("./models/catSchema.cjs")
const Contacts = require("./models/contactsSchema.cjs")
const cors = require("cors")


const { imageStorage, certificateStorage } = require("./middleware/storage.cjs");
const imageUpload = multer({ storage: imageStorage });


app.use(cors())


app.use(express.static('dist'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main().catch(err => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('start of main')
}



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


app.use('/uploads', express.static('uploads'));








const upload = multer({ storage });
app.post('/cat', upload.single('picture'), async (req, res) => {
    console.log(req.body)
    console.log("file", req.file);
    const rusult = await Cat.create({
        picture: req.file,
        breed: req.body.breed,
        link: req.body.link,
        food: req.body.food,
        toy: req.body.toy,
        advice: req.body.adcice,
    })

    res.json({message: "success"});
})

app.get('/cat', async (req, res) => {
    const result = await Cat.find();
    console.log("?",result)
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


app.post(
    "/upload-magic",
    imageUpload.single("uploaded_file"),
    async (req, res) => {

        console.log("upload!!")
    
      let newPath = null;
        console.log("catch", req.file)
      if (req.file !== undefined) {
        //success
        console.log("file proccessed:", req.file);
        newPath = req.file.path.substring(req.file.path.indexOf("/") + 1);
  
        res.json({
          message: "Image Upload Success",
          image: req.file.filename,
        });
      } else {
        res.json({
          message: "Image Upload Failed",
        });
      }
    }
  );
  

const listener = app.listen(port, () => {
    console.log('Server started at http://localhost:' + listener.address().port);
})

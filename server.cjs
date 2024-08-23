require('dotenv').config();
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = process.env.SERVER_PORT ?? 3000;
const mongoose = require("mongoose");
const User = require("./models/userSchema.cjs")
const Cat = require("./models/catSchema.cjs")
const Contacts = require("./models/contactsSchema.cjs")
const cors = require("cors")
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

const { imageStorage } = require("./middleware/storage.cjs");
const imageUpload = multer({ storage: imageStorage });

const fs = require("fs");
const { errorMiddleware } = require('error-middleware/middlewares');
const  BlacklistedToken = require('./models/blacklistedToken.cjs');

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
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('mongo db connection established'));
}

const SALT_ROUNDS=10;

app.post('/signup', async (req, res) => {

    const result = await User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,SALT_ROUNDS)
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
            if (bcrypt.compare(req.body.password, user.password)) {
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


const JWT_SECRET = 'your_jwt_secret'; // Replace with a secure secret key


// Set up email transporter (using SMTP here, configure as needed)
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASSWORD
  }
});

// Endpoint to request a password reset
app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '5m' });


    // Send email with the reset link
    const resetLink = process.env.VITE_SERVER_URI.replace('$SERVER_PORT',process.env.SERVER_PORT)+`#/forgot?token=${token}`;

    await transporter.sendMail({
      to: email,
      subject: 'Password Reset',
      text: `Click the following link to reset your password: ${resetLink}`
    });

    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error', error });
  }
});

// Endpoint to reset the password
app.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    // Check if token is blacklisted
    const blacklistedToken = await BlacklistedToken.findOne({ token,used:true });
    console.log({blacklistedToken})
    //check if the token has expired
    if (blacklistedToken) {
      return res.status(400).json({ message: 'Token is invalid or expired' });
    }

    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    const email = decoded.email;

    // Find user and update password
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('found user')
    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    
    console.log('found user:updated')
    console.log('found user')
    // Blacklist the token after successful use
    await BlacklistedToken.create({ token });

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});




app.use('/uploads', express.static('uploads'));








const upload = multer({ storage });
app.post('/cat', upload.single('picture'), async (req, res) => {
    console.log(req.body)
   // console.log("file", req.file);
    const rusult = await Cat.create({
       // picture: req.file,
        breed: req.body.breed,
        link: req.body.link,
        food: req.body.food,
        toy: req.body.toy,
        advice: req.body.adcice,
    })

    res.json({ message: "success" });
})

app.get('/cat', async (req, res) => {
    const result = await Cat.find();
    console.log("?", result)
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


            const result = await Cat.create({
                picture: req.file.filename,
                breed: req.body.breed,
                link: req.body.link,
                foodtoy: req.body.foodtoy,
                advice: req.body.advice,
            })

            res.json({
                message: "Image Upload Success",
                result: result,
                image: req.file.filename,
            });
        } else {
            res.json({
                message: "Image Upload Failed",
            });
        }
    }
);


app.get("/cat-feed", async (req, res) => {

    const result = await Cat.find();


    res.json({
        data: result
    })



})

app.use(express.static('uploads/collection/'))
//http://localhost:10000/uploads/collection/_image.png

app.use(errorMiddleware)


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
  })
  
  .then(() => {
        console.log('Connected to MongoDB');
    const listener=app.listen(port, () => {
        console.log('Server started at http://localhost:' + listener.address().port);
    })

});
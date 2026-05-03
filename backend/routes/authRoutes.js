const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const User = require("../models/User");

router.post("/signup", async (req, res) => {

    try {

        const {
            name,
            email,
            password,
            role
        } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({

                message: "User already exists"

            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({

            name,
            email,
            password: hashedPassword,
            role

        });

        await user.save();

        res.json({

            message: "Signup successful"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

});

router.post("/login", async (req, res) => {

    try {

        const {

            email,
            password

        } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({

                message: "Invalid credentials"

            });

        }

        const validPassword = await bcrypt.compare(

            password,
            user.password

        );

        if (!validPassword) {

            return res.status(400).json({

                message: "Invalid credentials"

            });

        }

        res.json({

            message: "Login successful",

            role: user.role

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

});

module.exports = router;
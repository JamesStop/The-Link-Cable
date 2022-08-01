const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { createUserToken } = require('../middleware/auth');

const router = express.Router();

// SIGN UP
// POST /api/signup
router.post('/signup', async (req, res, next) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 5);
		const newUser = await User.create({
			username: req.body.username,
			password: hashedPassword,
			email: req.body.email,
		});
		return res.status(201).json(newUser);
	} catch (error) {
		// return the next callback and pass it the error from catch
		return next(error);
	}
});

// SIGN IN
// POST /api/signin
router.post('/signin', (req, res, next) => {
	User.findOne({ username: req.body.username })
		// Pass the user and the request to createUserToken
		.then((user) => {if (bcrypt.compareSync(req.body.password, user.password)) {return res.json(user)}})
		// createUserToken will either throw an error that
		// will be caught by our error handler or send back
		// a token that we'll in turn send to the client.
		.then((token) => res.json({ token }))
		.catch(next);
});

module.exports = router;

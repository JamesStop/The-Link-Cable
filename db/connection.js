//===== CONNECTION.JS =========
//~~ [mongoose boilerplate] ~~ ()

//------- require dotenv -------
require('dotenv').config();

//------- import mongoose -------
const mongoose = require('mongoose');

//------- mongo uri & connections -------
// ON DEPLOY change to NODE_ENV
const mongoURI = process.env.DATABASE_URL;

//------- connect to mongo -------
mongoose
	.connect(mongoURI)
	.then((instance) =>
		console.log(`We are now connected ✅: ${instance.connections[0].name}`)
	)
	.catch((error) => console.log('Connection failed!', error));

// ------- export mongoose -----
module.exports = mongoose;

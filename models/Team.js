//===== MODEL.JS =========

//------- import mongoose -------
const mongoose = require('../db/connection.js');

//------- create schema function -------
const TeamSchema = new mongoose.Schema({
	name: String,
	pokemons: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Pokemon',
		},
	],
});

//------- instantiate the model w/ schema -------
const Team = mongoose.model('Team', TeamSchema);

//------- export model -------
module.exports = Team;

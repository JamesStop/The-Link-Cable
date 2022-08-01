//===== MODEL.JS =========

//------- import mongoose -------
const mongoose = require('../db/connection.js');

//------- create schema function -------
const PokemonSchema = new mongoose.Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	name: String,
	nickname: String,
	speciesUrl: String,
	formUrl: String,
	level: Number,
	ability: {
		name: String,
		effect: String,
	},
	nature: {
		name: String,
		increasedStat: {
			name: String,
			url: String,
		},
		decreasedStat: {
			name: String,
			url: String,
		},
	},
});

//------- instantiate the model w/ schema -------

//------- export model -------
module.exports = PokemonSchema;
//===== MODEL.JS =========

//------- import mongoose -------
const mongoose = require('../db/connection.js');
const PokemonSchema = require('./Pokemon')

//------- create schema function -------
const TeamSchema = new mongoose.Schema({
	name: String,
	positioning: {
		0: {
			x: Number,
			y: Number,
		},
		1: {
			x: Number,
			y: Number,
		},
		2: {
			x: Number,
			y: Number,
		},
		3: {
			x: Number,
			y: Number,
		},
		4: {
			x: Number,
			y: Number,
		},
		5: {
			x: Number,
			y: Number,
		},
	},
	owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
	pokemons: [PokemonSchema],
});

//------- instantiate the model w/ schema -------
const Team = mongoose.model('Team', TeamSchema);

//------- export model -------
module.exports = Team;

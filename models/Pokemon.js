//===== MODEL.JS =========

//------- import mongoose -------
const mongoose = require('../db/connection.js');

//------- create schema function -------
const PokemonSchema = new mongoose.Schema({
	name: String,
	nickname: String,
	speciesUrl: String,
	formUrl: String,
});

//------- instantiate the model w/ schema -------

//------- export model -------
module.exports = PokemonSchema;
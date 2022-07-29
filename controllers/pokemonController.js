//===== CONTROLLER.js =========
//------- import express -------
const express = require('express');

//------- import router -------
const router = express.Router();

//------- import model -------
const Pokemon = require('../models/Pokemon');
const Team = require('../models/Team');

//------- router functions -------

//(.get , .post , .put , .patch , .delete)


router.get('/:id', (req, res, next) => {
    const id = req.params.id;
	Team.findOne({'pokemons._id': id})
        .then((team) => {
            const pokemon = team.pokemons.id(id)
            return res.json(pokemon)
        })
		.catch(next);
});

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    const pokemonData = req.body;
    Team.findOne({ 'pokemons._id': id })
			.then((team) => {
				const pokemon = team.pokemons.id(id);
				pokemon.set(pokemonData);
				return team.save();
			})
			.then(() => res.sendStatus(204).json())
			.catch(next);
});

//put pokemon in team
router.post('/', (req, res, next) => {
    const pokemonData = req.body;
	const teamId = pokemonData.teamId;

	Team.findById(teamId)
        .then((team) => {
            team.pokemons.push(pokemonData);
            return team.save()
        })
		.then((team) => res.status(201).json({ team: team }))
		.catch(next);
});


router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
	Team.findOne({ 'pokemons._id': id })
		.then((team) => {
			team.pokemons.id(id).remove();
			return team.save();
		})
		.then(() => res.sendStatus(204))
		.catch(next);
});

//------- export router ------

module.exports = router;

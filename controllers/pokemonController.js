//===== CONTROLLER.js =========
//------- import express -------
const express = require('express');

//------- import router -------
const router = express.Router();

//------- import model -------
const Pokemon = require('../models/Pokemon');

//------- router functions -------

//(.get , .post , .put , .patch , .delete)
router.get('/', (req, res, next) => {
	Pokemon.find({})
		.then((pokemon) => res.json(pokemon))
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	Pokemon.findById(req.params.id)
		.then((pokemon) => res.json(pokemon))
		.catch(next);
});

router.post('/', (req, res, next) => {
	Pokemon.create(req.body)
		.then((pokemon) => res.json(pokemon))
		.catch(next);
});

router.patch('/:id', (req, res, next) => {
    Pokemon.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((pokemon) => res.json(pokemon))
		.catch(next);
});

router.delete('/:id', (req, res, next) => {
	Pokemon.findOneAndDelete({ _id: req.params.id })
		.then((pokemon) => res.json(pokemon))
		.catch(next);
});

//------- export router ------

module.exports = router;

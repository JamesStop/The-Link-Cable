//===== CONTROLLER.js =========
//------- import express -------
const express = require('express');

//------- import router -------
const router = express.Router();
// const { requireToken } = require('../middleware/auth');
// const { handleValidateOwnership } = require('../middleware/custom_errors');

//------- import model -------
const Team = require('../models/Team');

//------- router functions -------

//(.get , .post , .put , .patch , .delete)
router.get('/', (req, res, next) => {
	Team.find({})
		.then((team) => res.json(team))
		.catch(next);
});

router.get('/:id', async(req, res, next) => {
	Team.findById(req.params.id)
		.then((team) => res.json(team))
		.catch(next);
});

router.post('/', (req, res, next) => {
	Team.create(req.body)
		.then((team) => res.json(team))
		.catch(next);
});

router.patch('/:id', (req, res, next) => {
	Team.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((team) => res.json(team))
		.catch(next);
});

router.delete('/:id', (req, res, next) => {
	Team.findOneAndDelete({ _id: req.params.id })
		.then((team) => res.json(team))
		.catch(next);
});

//------- export router ------

module.exports = router;

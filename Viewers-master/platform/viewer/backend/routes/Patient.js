const express = require("express");
const router = express.Router();
// Load User model
const Patient = require("../models/Patient.Model");
// @route POST api/users/register
// @desc Register user
// @access Public
//select tous les commercants "get http://localhost:3001/Doctor/"
router.route('/').get((req, res) => {
    Patient.find()
    .then(patient => res.json(patient))
    .catch(err => res.status(400).json('Error: ' + err));
}); 
module.exports = router;
var express = require('express');
var router = express.Router();

var data = require('../data');

router.post('/', function(req, res) {
	data.save({
		begin: req.body.beginTime,
		end: req.body.endTime,
		user: req.body.user,
		tel: req.body.tel,
		note: req.body.note,
		date: req.body.date,
		room: req.body.room,
		building: req.body.building
	});
	res.redirect('/rooms?room=' + req.body.room + '&building=' + req.body.building);
});

module.exports = router;

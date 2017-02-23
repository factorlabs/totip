let mongoose = require('mongoose');
let Tip = require('../models/tip');

/*
 * GET /tip
 */
function getTips(req, res) {
    let query = Tip.find({});
    query.exec((err, tips) => {
        if(err) res.send(err);
        res.json(tips);
    });
}

/*
 * GET /tip/:id
 */
function getTip(req, res) {
    Tip.findById(req.params.id, (err, tip) => {
        if(err) res.send(err);
        res.json(tip);
    });     
}

module.exports = { getTips, getTip };

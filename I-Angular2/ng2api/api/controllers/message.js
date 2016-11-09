'use strict';
// Include our "db"
var db = require('../../config/db')();
// Exports all the functions to perform on the db
module.exports = { all, save, getOne, update, del };

//GET /movie operationId
function all(req, res, next) {
    res.json({ message: db.find() });
}
//POST /movie operationId
function save(req, res, next) {
    res.json({ success: db.save(req.body), description: "Message added to the list!" });
}
//GET /movie/{id} operationId
function getOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var message = db.find(id);
    if (message) {
        res.json(message);
    } else {
        res.status(204).send();
    }
}
//PUT /movie/{id} operationId
function update(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var message = req.body;
    if (db.update(id, message)) {
        res.json({ success: 1, description: "Message updated!" });
    } else {
        res.status(204).send();
    }

}
//DELETE /movie/{id} operationId
function del(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    if (db.remove(id)) {
        res.json({ success: 1, description: "Message deleted!" });
    } else {
        res.status(204).send();
    }

}
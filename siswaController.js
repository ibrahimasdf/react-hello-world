var mongoose = require("mongoose");
var Siswa = require("../data/siswa");
var _ = require("underscore");

var router = require("express").Router();
router.route("/siswa/:id?").get(getSiswa).post(addSiswa).delete(deleteSiswa);

function getSiswa(req, res) {
    Siswa.find(function (err, siswa) {
        if (err)
            res.send(err);
        else
            res.json(siswa);
    });
}

function addSiswa(req, res) {
    var siswa = new Siswa(_.extend({}, req.body));
    siswa.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(siswa);
    });
}

function deleteSiswa(req, res) {
    var id = req.params.id;
    School.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;
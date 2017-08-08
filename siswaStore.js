var dispatcher = require("../dispatcher");
var siswaService = require("../services/siswaService");

function SiswaStore() {
    var listeners = [];

    function onChange(listener) {
        getSchools(listener);
        listeners.push(listener);
    }
    
    function getSiswa(cb){
        siswaService.getSiswa().then(function (res) {
            cb(res);
        });
    }

    function addSiswa(siswa) {
        siswaService.addSiswa(siswa).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteSiswa(siswa) {
        siswaService.deleteSiswa(siswa).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getSchools(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "siswa") {
            switch (split[1]) {
                case "addSiswa":
                    addSiswa(payload.siswa);
                    break;
                case "deleteSiswa":
                    deleteSiswa(payload.siswa);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = SiswaStore();
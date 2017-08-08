var dispatcher = require("../dispatcher");

module.exports = {
    addSiswa:function(siswa){
        dispatcher.dispatch({
           siswa:school,
           type:"siswa:addSchool" 
        });
    },
    deleteSiswa:function(siswa){
        dispatcher.dispatch({
           siswa:siswa,
           type:"siswa:deleteSiswa" 
        });
    }
}
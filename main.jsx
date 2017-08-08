var React = require("react");
var ReactDOM = require("react-dom");
var SiswaList = require("./components/SiswaList.jsx");
var siswaStore = require("./stores/siswaStore");
var _schools = [];
var getSiswaCallback = function(siswa){
    _siswa = siswa;
    render();
};
siswaStore.onChange(getSiswaCallback);

function render(){
    ReactDOM.render(<SiswaList siswa={_siswa} />, document.getElementById("container"));    
}
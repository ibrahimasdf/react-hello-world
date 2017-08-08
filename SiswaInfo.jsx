var React = require("react");
var actions = require("../actions/SiswaActions");

module.exports = React.createClass({
    deleteSiswa: function(e){
        e.preventDefault();
        actions.deleteSiswa(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteSiswa}>&times;</span>
                </div>
                <div className="panel-body">{this.props.info.tagline}</div>
            </div>
        )
    }
})
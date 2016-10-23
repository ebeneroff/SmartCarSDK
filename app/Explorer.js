var React = require('react');
var ReactDOM = require('react-dom');
var ExplorerFunction = require('./ExplorerFunction');
var NewExplorer = require('./NewExplorer.js');

var Explorer = React.createClass({
	render: function(){
		return(
			<div className="row">
				<div className="col-sm-4">
				<h4> Create a smartcar explorer </h4>
				 </div>
				<div className="col-lg-6">
					<ExplorerFunction/>
				</div>
				
			</div>
		)
	}
});

module.exports = Explorer;
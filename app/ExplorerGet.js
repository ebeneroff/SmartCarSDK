var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('./Form.js');

var ExplorerGet = React.createClass({
	handleChange4: function(newID){
		this.setState({name: newID});
	},
	handleChange2: function(newHeaders){
		this.setState({headers: newHeaders});
	},
	render: function(){
		return(
			<div>
			<table className="appTable">
			<tbody className="appCol">
				<tr>
					<th>Component ID</th>
					<th>Headers</th>
					<th>Model</th>
				</tr>
				<tr>
					<td><Form id="ID" handleChange={this.handleChange4}/></td>
					<td><Form handleChange={this.handleChange2}/></td>

					<td>
<pre>{`
var call = explorer('name'. {
	url: 'https;//explorer.smartcar.com/developer',
	method: 'Get',
	headers: {
		Content-Type(String),
	},
});
`}</pre>
					 </td>
				</tr>
			</tbody>
			</table>
		</div>
		)
	}
});

module.exports = ExplorerGet;
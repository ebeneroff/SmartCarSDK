var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('./Form.js');
var NewExplorer = require('./NewExplorer.js');
var key = 0;

var ExplorerGet = React.createClass({
	getInitialState: function(){
		return{ 
			explorers: [],
			name: '',
			method: this.props.method,
			headers: ''
		};
	},
	onClick: function(){
		var abc = this.state.explorers;
		abc.push(<NewExplorer key={key++} name={this.state.name} method={this.props.method} headers={this.state.headers}/>);
		this.setState({explorers: abc});
	},
	handleChange: function(id, newData){
		console.log(id);
		if(id === "headers"){
			this.setState({headers: newData});
		}
		else if(id === "name"){
			this.setState({name: newData});
		}
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
					<td><Form id="name" handleChange={this.handleChange}/></td>
					<td><Form id="headers" handleChange={this.handleChange}/></td>

					<td>
<pre>{`
headers: {
   Content-Type(String)
}
`}</pre>
					 </td>
				</tr>
			</tbody>
			</table>
			<button type="button" onClick={this.onClick}>Create Explorer</button>
			{this.state.explorers}
		</div>
		)
	}
});

module.exports = ExplorerGet;
var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('./Form.js');
var MethodSelector = require('./MethodSelector');
var NewExplorer = require('./NewExplorer');
var key = 0;

var ExplorerFunction = React.createClass({
	getInitialState: function(){
		return{ 
			explorers: [],
			name: '',
			headers: '',
			body:''
		};
	},
	onClick: function(){
		var abc = this.state.explorers;
		abc.push(<NewExplorer key={key++} name={this.state.name} method={this.state.method} headers={this.state.headers} body={this.state.body}/>);
		this.setState({explorers: abc});
	},
	render:function(){
		return(
			<div>
			<table>
			<tbody>
				<tr>
					<th>Component ID</th>
					<th>Options Object</th>
					<th>Method</th>
					<th>Headers</th>
					<th>Body</th>
					<th>Name</th>
					<th>Optional</th>
					<th>Model</th>
				</tr>
				<tr>
					<td><Form /></td>
					<td><Form /></td>
					<td><MethodSelector /></td>
					<td><Form /></td>
					<td><Form /></td>
					<td><Form /></td>
					<td><Form /></td>
					<td>
						<pre>{`
var call = explorer('name'. {
	url: '...',
	method: '...',
	headers: {
		Content-Type(String),
	},
	body: [
	{
		name(String),
		type(String, optional),
		min(Number, optional),
		max(Number, optional),
		placeholder(String, optional),
		required(Boolean, optional),
		pattern(String, optional)
	}]
}
						`}</pre>
					 </td>
				</tr>
			</tbody>
			</table>
			
			<button type="button" onClick={this.onClick}>Create Explorer</button>
			{this.state.explorers}
			</div>
	)}
});

module.exports = ExplorerFunction;

var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('./Form.js');
var MethodSelector = require('./MethodSelector');
var NewExplorer = require('./NewExplorer');
var key = 0;

var ExplorerPutPost = React.createClass({
	getInitialState: function(){
		return{ 
			explorers: [],
			name: '',
			method: 'Get',
			headers: '',
			body:''
		};
	},
	onClick: function(){
		var abc = this.state.explorers;
		abc.push(<NewExplorer key={key++} name={this.state.name} method={this.state.method} headers={this.state.headers} body={this.state.body}/>);
		this.setState({explorers: abc});
	},
	
	handleChange2: function(newHeaders){
		this.setState({headers: newHeaders});
	},
	handleChange3: function(newBody){
		this.setState({body: newBody});
	},
	handleChange4: function(newID){
		this.setState({name: newID});
	},
	render:function(){
		return(
			<div>
			<table className="appTable">
			<tbody className="appCol">
				<tr>
					<th>Component ID</th>
					<th>Headers</th>
					<th>Body</th>
					<th>Model</th>
				</tr>
				<tr>
					<td><Form id="ID" handleChange={this.handleChange4}/></td>
					<td><Form handleChange={this.handleChange2}/></td>
					<td><Form handleChange={this.handleChange3}/></td>

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

module.exports = ExplorerPutPost;

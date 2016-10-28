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
			method: this.props.method,
			headers: '',
			body:''
		};
	},
	onClick: function(){
		var abc = this.state.explorers;
		abc.push(<NewExplorer key={key++} url={this.props.url} name={this.state.name} method={this.props.method} headers={this.state.headers} body={this.state.body}/>);
		this.setState({explorers: abc});
	},
	handleChange:function(id, newData){	
		if(id === "headers"){
			this.setState({headers: newData});
		}
		else if(id === "name"){
			this.setState({name: newData});
		}
		else if(id === "body"){
			this.setState({body: newData});
		}
	},
	render:function(){
		return(
			<div className="divTable">
			<table className="appTable">
			<tbody className="appCol">
				<tr>
					<th>Component ID</th>
					<th>Headers</th>
					<th>Body</th>
					<th>Model</th>
				</tr>
				<tr>
					<td><Form id="name" placeholder="MyExplorer"handleChange={this.handleChange}/></td>
					<td><Form id="headers" placeholder="Content-Type: 'application/json'"handleChange={this.handleChange}/></td>
					<td><Form id="body" placeholder={`name: Evan, \ntype: String, \nrequired: true`} handleChange={this.handleChange}/></td>
					<td>
<pre className="explorerComponent">{`headers: {\n   Content-Type(String)\n},\nbody: [{\n   name(String),\n   type(String, optional),\n   min(Number, optional),\n   max(Number, optional),\n   placeholder(String, optional),\n   required(Boolean, optional),\n   pattern(String, optional)\n}]
`}</pre>
					 </td>
				</tr>
			</tbody>
			</table>
			
			<button type="button" className="explorerButtons" onClick={this.onClick}>Create Explorer</button>
			{this.state.explorers}
			</div>
	)}
});

module.exports = ExplorerPutPost;

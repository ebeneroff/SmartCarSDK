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
		abc.push(<NewExplorer key={key++} name={this.state.name} method={this.props.method} headers={this.state.headers} body={this.state.body}/>);
		this.setState({explorers: abc});
	},
	handleChange:function(id, newData){	
		console.log(id);
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
					<td><Form id="name" handleChange={this.handleChange}/></td>
					<td><Form id="headers" handleChange={this.handleChange}/></td>
					<td><Form id="body" handleChange={this.handleChange}/></td>
					<td>
<pre style={{width:'300px'}}><code>{`
headers: {
   Content-Type(String)
},
body: [{
   name(String),
   type(String, optional),
   min(Number, optional),
   max(Number, optional),
   placeholder(String, optional),
   required(Boolean, optional),
   pattern(String, optional)
}]
`}</code></pre>
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

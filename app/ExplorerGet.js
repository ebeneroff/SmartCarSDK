var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('./Form.js');
var NewExplorer = require('./NewExplorer.js');
var key = 0;

var ExplorerGet = React.createClass({
	getInitialState: function(){
		return{ 
			explorers: undefined,
			name: undefined,
			method: this.props.method,
			headers: "Content-Type: 'application/json'"
		};
	},
	onClick: function(){
		var abc = this.state.explorers;
		if(this.state.name == undefined){
			this.setState({explorers: <span key={key++}> One or more fields are empty! </span>})
		}
		else if(this.state.headers == undefined)
		{
			this.setState({explorers: <span key={key++}> Content-Type must be type application/json </span>})
		}
		else{
			this.setState({explorers: <NewExplorer key={key++} url={this.props.url} name={this.state.name} method={this.props.method} headers={this.state.headers}/>});
		}
	},
	handleChange: function(id, newData){
		// Header must be Content-Type: 'application/json'
		// if(id === "headers"){
		// 	this.setState({headers: newData});
		// }
		if(id === "name"){
			this.setState({name: newData});
		}
	},
	render: function(){
		return(
			<div className="divTable">
			<table className="appTable">
			<tbody className="appCol">
				<tr>
					<th>Component ID</th>
					<th>Headers</th>
					<th> </th>
					<th>Model</th>
				</tr>
				<tr>
					<td><Form id="name" placeholder="MyExplorer" handleChange={this.handleChange}/></td>
					<td><Form id="headers" value={`Content-Type: 'application/json'`} handleChange={this.handleChange}/></td>
					<td style={{width:'350px'}}> </td>
					<td>
					<pre className="explorerComponent">{`headers:{ \n   Content-Type(String) \n}`}</pre>
					 </td>
				</tr>
			</tbody>
			</table>
			<button type="button" className="explorerButtons"onClick={this.onClick}>Create Explorer</button>
			{this.state.explorers}
		</div>
		)
	}
});

module.exports = ExplorerGet;
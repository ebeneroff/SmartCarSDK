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
		console.log(this.props.url);
		var abc = this.state.explorers;
		abc.push(<NewExplorer key={key++} url={this.props.url} name={this.state.name} method={this.props.method} headers={this.state.headers}/>);
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
			<div className="divTable">
			<table className="appTable">
			<tbody className="appCol">
				<tr>
					<th>Component ID</th>
					<th>Headers</th>
					<th>Model</th>
				</tr>
				<tr>
					<td><Form id="name" placeholder="MyExplorer"handleChange={this.handleChange}/></td>
					<td><Form id="headers" placeholder="Content-Type: 'application/json'"handleChange={this.handleChange}/></td>
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
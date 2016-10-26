var React = require('react');
var ReactDOM = require('react-dom');
var Parser = require('./Parser.js');
var html = "";
var axios = require('axios');
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";
var NewExplorer = React.createClass({
	componentWillMount: function(){
		html = Parser(this.props.name, this.props.method, this.props.headers, this.props.body);
	},
	onClick: function(){
		console.log(this.props.method);
		if(this.props.method === "Get"){
		axios.get('http://localhost:8000/api')
			.then(function(response){
				console.log(response);
			})
		}
		else if(this.props.method === "Post"){
			axios.post('http://localhost:8000/api')
			.then(function(response){
				console.log(response);
			})
		}
		else if(this.props.method === "Put"){
			axios.put('http://localhost:8000/api')
			.then(function(response){
				console.log(response);
			})
		}
		else if(this.props.method === "Delete"){
			axios.put('http://localhost:8000/api')
			.then(function(response){
				console.log(response);
			})
		}
	},
	render:function(){
		return(
			<div>
<pre style={{width:'500px'}}>
	{html}
</pre>
				<button type="button" onClick={this.onClick}>Explore Request</button>
			</div>
		)
	}
});

module.exports = NewExplorer;
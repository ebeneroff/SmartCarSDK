var React = require('react');
var ReactDOM = require('react-dom');
var Parser = require('./Parser.js');
var html = "";
var axios = require('axios');

var NewExplorer = React.createClass({
	getInitialState: function(){
		return {
			response: undefined,
		}
	},
	componentWillMount: function(){
		html = Parser(this.props.name, this.props.method, this.props.headers, this.props.body, this.props.url);
	},
	onClick: function(){
		// Refactor to remove repeated code
		if(this.props.method === "Get"){
		axios.get('http://' + this.props.url)
			.then(function(response){
				console.log(response);
				this.setState({response: <div> Your Response <pre className="response"> {JSON.stringify(response, null, "  ")} </pre> </div>});
			}.bind(this))
			.catch(function(error){
				this.setState({response: <div> Your Response <pre className="response"> Status: 400 Bad Request {JSON.stringify(error, null, "  ")} </pre> </div>}); 
			}.bind(this));
		}
		else if(this.props.method === "Post"){
			axios.post('http://' + this.props.url)
			.then(function(response){
				console.log(response);
				this.setState({response: <div> Your Response <pre className="response"> {JSON.stringify(response, null, "  ")} </pre> </div>});
			}.bind(this))
			.catch(function(error){
				this.setState({response: <div> Your Response <pre className="response"> Status: 400 Bad Request {JSON.stringify(error, null, "  ")} </pre> </div>});
			}.bind(this))
		}
		else if(this.props.method === "Put"){
			axios.put('http://' + this.props.url)
			.then(function(response){
				this.setState({response: <div> Your Response <pre className="response"> {JSON.stringify(response, null, "  ")} </pre> </div>});
			}.bind(this))
			.catch(function(error){
				this.setState({response: <div> Your Response <pre className="response"> Status: 400 Bad Request {JSON.stringify(error, null, "  ")} </pre> </div>});
			}.bind(this));
		}
		else if(this.props.method === "Delete"){
			axios.delete('http://' + this.props.url)
			.then(function(response){
				this.setState({response: <div> Your Response <pre className="response"> {JSON.stringify(response, null, "  ")} </pre> </div>});
			}.bind(this))
			.catch(function(error){
				this.setState({response: <div> Your Response <pre className="response"> Status: 400 Bad Request {JSON.stringify(error, null, "  ")} </pre> </div>});
			}.bind(this));
		}
	},
	render:function(){
		return(
			<div className="container row newExplorer">

			<div className="col-sm-6" style={{paddingTop: '10px', paddingLeft: '0px'}}>
			<span style={{opacity: ".7", color: '#D0493B', fontSize: '18px', fontWeight: 'bold', paddingLeft:'30px'}}> Your Component</span>
<pre style={{width:'500px', marginLeft: '30px', backgroundColor:'#F0EBEE', border:'none', height: '210px', fontWeight:'bold', opacity: '.6'}}>
	{html}
</pre>
<button type="button"  className="explorerButtons" onClick={this.onClick}>Explore Request</button>
</div>
				<div className="col-sm-6" style={{opacity: ".7", color: '#D0493B', fontSize: '18px', fontWeight: 'bold', paddingTop: '10px'}}>
				
				{this.state.response}
			</div>
			
			</div>
		)
	}
});

module.exports = NewExplorer;
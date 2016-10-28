var React = require('react');
var ReactDOM = require('react-dom');
var ExplorerPutPost = require('./ExplorerPutPost.js');
var ExplorerGet = require('./ExplorerGet.js');
var ExplorerDelete = require('./ExplorerDelete.js');
var MethodSelector = require('./MethodSelector.js');
var UrlForm = require('./UrlForm.js');

var Explorer = React.createClass({
	getInitialState: function(){
		return {url: 'https://smartcarexplorer.herokuapp.com/api'}
	},
	componentWillMount: function(){
		return ReactDOM.render(<MethodSelector handleChange={this.handleChange}/>, document.getElementById('method')),
			ReactDOM.render(<UrlForm handleChange={this.urlChange}/>, document.getElementById('urlForm'))
	},
	urlChange: function(url){
		this.setState({url: url});
	},
	handleChange: function(newMethod){
		//Destroy old view
		ReactDOM.render(<div></div>, document.getElementById("explorer"));
		//Render new view
		if(newMethod == "Post"){
			ReactDOM.render(<ExplorerPutPost url={this.state.url} method="Post"/>, document.getElementById("explorer"));
		}
		else if(newMethod == "Put"){
			ReactDOM.render(<ExplorerPutPost url={this.state.url} method="Put"/>, document.getElementById("explorer"));
		}
		else if(newMethod == "Get"){
			ReactDOM.render(<ExplorerGet url={this.state.url} method="Get"/>, document.getElementById("explorer"));
		}
		else{
			ReactDOM.render(<ExplorerDelete url={this.state.url} method="Delete"/>, document.getElementById("explorer"));
		}
	},
	render: function(){
		return(
			<div className="row explorer">
			<div className="welcome">Welcome to my API explorer! Click on a method to get started.</div>
				<div className="container explorerWell" id="explorer">	
				</div>
			</div>
		)
	}
});

module.exports = Explorer;
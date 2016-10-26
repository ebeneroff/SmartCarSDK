var React = require('react');
var ReactDOM = require('react-dom');
var ExplorerPutPost = require('./ExplorerPutPost.js');
var ExplorerGet = require('./ExplorerGet.js');
var ExplorerDelete = require('./ExplorerDelete.js');
var MethodSelector = require('./MethodSelector.js');

var Explorer = React.createClass({
	getInitialState: function(){
		return {}
	},
	handleChange: function(newMethod){
		this.setState({method: newMethod});
		if(newMethod == "Post"){
			ReactDOM.render(<ExplorerPutPost method="Post"/>, document.getElementById("explorer"));
		}
		else if(newMethod == "Put"){
			ReactDOM.render(<ExplorerPutPost method="Put"/>, document.getElementById("explorer"));
		}
		else if(newMethod == "Get"){
			ReactDOM.render(<ExplorerGet method="Get"/>, document.getElementById("explorer"));
		}
		else{
			ReactDOM.render(<ExplorerDelete method="Delete"/>, document.getElementById("explorer"));
		}
	},
	render: function(){
		return(
			<div className="row">
				<div className="col-sm-2">
				<h4 style={{color:"white"}}> Create an explorer </h4>
				<MethodSelector handleChange={this.handleChange}/>
				 </div>
				<div className="col-lg-6" id="explorer">
				</div>
				
			</div>
		)
	}
});

module.exports = Explorer;
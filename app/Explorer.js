var React = require('react');
var ReactDOM = require('react-dom');
var ExplorerPutPost = require('./ExplorerPutPost.js');
var ExplorerGet = require('./ExplorerGet.js');
var ExplorerDelete = require('./ExplorerDelete.js');
var MethodSelector = require('./MethodSelector.js');

var Explorer = React.createClass({
	handleChange: function(newMethod){
		this.setState({method: newMethod});
		if(newMethod == "Post" || newMethod == "Put"){
			ReactDOM.render(<ExplorerPutPost/>, document.getElementById("explorer"));
		}
		else if(newMethod == "Get"){
			ReactDOM.render(<ExplorerGet/>, document.getElementById("explorer"));
		}
		else{
			ReactDOM.render(<ExplorerDelete/>, document.getElementById("explorer"));
		}
	},
	render: function(){
		return(
			<div className="row">
				<div className="col-sm-4">
				<h4 style={{color:"white"}}> Create a smartcar explorer </h4>
				<MethodSelector handleChange={this.handleChange}/>
				 </div>
				<div className="col-lg-6" id="explorer">
				</div>
				
			</div>
		)
	}
});

module.exports = Explorer;
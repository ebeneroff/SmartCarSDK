var React = require('react');
var ReactDOM = require('react-dom');
var Explorer = require('./Explorer.js');

var Index = React.createClass({
	render: function(){
		return(
			<div className="main-app row">
				<div className="container">
					<Explorer/>
				</div>
			</div>
    )}
});

ReactDOM.render(
		<Index />, document.getElementById('app')
	);

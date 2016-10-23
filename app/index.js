var React = require('react');
var ReactDOM = require('react-dom');
var Explorer = require('./Explorer.js');

var Index = React.createClass({
	render: function(){
		return(
			<div style={{paddingTop:"30%"}} className="row">
				<div className="col-lg-6">
					<Explorer/>
				</div>
			</div>
    )}
});

ReactDOM.render(
		<Index />, document.getElementById('app')
	);

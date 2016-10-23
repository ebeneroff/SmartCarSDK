var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;

var NewExplorer = React.createClass({
	getInitialState: function(){
		return{ };
	},
	render:function(){
		return(
			<ul>
				Hello World!
				<li>
					{this.props.name}
				</li>
				<li>
					{this.props.method}
				</li>
				<li>
					{this.props.headers}
				</li>
				<li>
					{this.props.body}
				</li> 
			</ul>
		)
	}
});

NewExplorer.PropTypes = {
	name: PropTypes.string.isRequired,
	headers: PropTypes.string.isRequired,
	method: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired
}

module.exports = NewExplorer;
var React = require('react');
var ReactDOM = require('react-dom');
var Parser = require('./Parser.js');

var NewExplorer = React.createClass({
	getInitialState: function(){
		return{ };
	},
	render:function(){
		return(
			<pre>
				{`<div id="`}{this.props.name}{`"></div>
				
				explorer('container', {
					url: 'https://explorer.smartcar.com/developer',
					method: '`}{this.props.method}{`
				</li>
				<li>
					{this.props.headers}
				</li>
				<li>
					{this.props.body}
				</li> `}
			</pre>
		)
	}
});
module.exports = NewExplorer;
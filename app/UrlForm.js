var React = require('react');
var ReactDOM = require('react-dom');

var UrlForm = React.createClass({
	getInitialState: function(){
		return {url: 'https://smartcarexplorer.herokuapp.com/api'}
	},
	handleChange(event) {
    	this.setState({value: event.target.value});
    	this.props.handleChange(event.target.value);
  	},
	render:function(){
		return(
			<form className="UrlForm">
			<span style={{fontSize: '18px',opacity:'.8', color:'#C0392B'}}> url: </span>
				<input defaultValue={this.state.url} onChange={this.handleChange}>
				</input>
			</form>
		)
	}
})

module.exports = UrlForm;
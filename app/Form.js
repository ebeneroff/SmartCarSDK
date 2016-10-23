var React = require('react');
var ReactDOM = require('react-dom');

var Form = React.createClass({
	getInitialState:function(){
        return {value: ''};
    },
	handleChange(event) {
    	this.setState({value: event.target.value});
    	this.props.handleChange(event.target.value);
  	},
	render: function(){
		return(
			<div>
        		<input type="text" 
        		placeholder=""
          		value={this.state.value}
         		onChange={this.handleChange}
         		className="appForm" />
      		</div>
		)
	}
});

module.exports = Form;
var React = require('react');
var ReactDOM = require('react-dom');

var Form = React.createClass({
	getInitialState:function(){
        return {value: this.props.value};
  },
  handleChange: function(event){
    	this.setState({value: event.target.value});
    	this.props.handleChange(this.props.id, event.target.value);
  },
	render: function(){
		return(
			<div>
        		<textarea type="text" 
        		placeholder={this.props.placeholder}
        		id={this.props.id}
          	value={this.props.value}
         		onChange={this.handleChange}
         		className="appForm" />
      		</div>
		)
	}
});

module.exports = Form;
var React = require('react');
var ReactDOM = require('react-dom');

var MethodSelector = React.createClass({
    getInitialState:function(){
        return {selectValue:'Get'};
    },
    handleChange:function(e){
        this.setState({selectValue:e.target.value});
    },
    render: function() {
        return (
        <div>
         <select 
         defaultValue={this.state.selectValue} 
         onChange={this.handleChange} 
         >
            <option value="Get">Get</option>
            <option value="Put">Put</option>
            <option value="Post">Post</option>
            <option value="Delete">Delete</option>
          </select>
          </div>        
        );
    }
});

module.exports = MethodSelector;
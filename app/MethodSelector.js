var React = require('react');
var ReactDOM = require('react-dom');

var MethodSelector = React.createClass({
    getInitialState:function(){
        return {method:'Get'};
    },
    handleChange:function(event){
        this.setState({method:event.target.value});
        this.props.handleChange(event.target.value);
    },
    render: function() {
        return (
        <div style={{marginTop:'5vh', textAlign:'center', fontSize:'20px', color:'#FFF3F3'}}>
        Methods
         <div defaultValue={this.props.method} onClick={this.handleChange} className="btn-group">
            <button value="Get">GET</button>
            <button value="Put">PUT</button>
            <button value="Post">POST</button>
            <button value="Delete">DELETE</button>
          </div> 
        </div>
        )
    }
});

module.exports = MethodSelector;
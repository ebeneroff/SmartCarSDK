var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert("Text field value is: '" + this.state.value + "'");
  }

  render() {
    return (
      <div>
        <input type="text"
          placeholder={this.props.name}
          value={this.state.value}
          onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

Form.PropTypes = {
  name: PropTypes.string.isRequired
}

module.exports = Form;
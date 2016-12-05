class ColorDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.onSelect = this.onSelect.bind(this);
  }

  propTypes() {
    value: React.PropTypes.string
  }
  
  getInitialState() {
      return {
        value: ""
      };
  }
    
  onSelect(ev) {
    this.setState({
      value: ev.target.value
    });
  }

  render() {
    var optionStyle;
    optionStyle = {backgroundColor: this.state.value};
    return (
      <div> 
        <select id="colorSelect" onChange={this.onSelect} style={optionStyle}> 
          <option value="white" > Select Color Below </option>
          <option value="blue" style={{backgroundColor: 'blue'}} />
          <option value="red" style={{backgroundColor: 'red'}} />
          <option value="yellow" style={{backgroundColor: 'yellow'}}/>  
        </select>
        <input value={this.state.value === 'white' ? "" : this.state.value}/>
      </div>
    );
  }
}

ReactDOM.render(<ColorDropdown />, document.getElementById('content'));
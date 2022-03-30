const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <div className="alert alert-success">L'eau bout</div>;
  } else {
    return <div className="alert alert-info">L'eau ne bout pas</div>;
  }
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const { temperature } = this.props;
    const name = "scale" + this.props.scale;
    const scaleName = scaleNames[this.props.scale];
    return (
      <div className="form-group">
        <label htmlFor={name}>Température (en {scaleName})</label>
        <input
          id={name}
          type="text"
          className="form-control"
          value={temperature}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "20",
    };
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState = { scale: "c", temperature };
  }

  handleFahrenheitChange(temperature) {
    this.setState = { scale: "f", temperature };
  }

  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === "c" ? temperature : toCelsius(temperature);
    const fahrenheit = scale === "f" ? temperature : toFahrenheit(temperature);
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("app"));

/* 
  Création de mes premiers Composants REACT
*/

function WelcomeFunc({ name, children }) {
  return (
    <div>
      <h1>Bonjour {name}</h1>
      <p>{children}</p>
    </div>
  );
}

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Bonjour {this.props.name}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  // changer l'état
  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        Il est {this.state.date.toLocaleDateString()}{" "}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: props.start };
    this.timer = null;
  }

  componentDidMount() {
    window.setInterval(this.increment.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  increment() {
    this.setState({ number: this.state.number + 1 });
  }

  render() {
    return <div>Valeur : {this.state.number}</div>;
  }
}

Incrementer.defaultProps = {
  start: 0,
  step: 1,
};

function Home() {
  return (
    <div>
      <Welcome name="Dorothée" />
      <Welcome name="Jean" />
      <Clock />
      <Incrementer start={10} />
      <Incrementer start={100} />
    </div>
  );
}

ReactDOM.render(<Home />, document.querySelector("#app"));

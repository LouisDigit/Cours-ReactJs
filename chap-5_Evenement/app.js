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
    this.state = { number: props.start, timer: null };
    this.toggle = this.toggle.bind(this);
    this.reinit = this.reinit.bind(this);
    
  }

  componentDidMount() {
    this.play();
  }

  componentWillUnmount(e) {
    window.clearInterval(this.state.timer);
  }

  increment() {
    this.setState({ number: this.state.number + 1 });
  }

  pause() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: null,
    });
  }

  play() {
    this.setState({
      timer: window.setInterval(this.increment.bind(this), 1000),
    });
  }

  label() {
    return this.state.timer ? 'Pause' : 'Lecture';
  }

  toggle() {
    return this.state.timer ? this.pause() : this.play();
  }

  reinit() {
    this.pause();
    this.play();
    this.setState({
      number:0
    })
  }

  render() {
    return (
      <div>
        Valeur : {this.state.number}{" "}
        <button onClick={this.toggle}>{this.label()}</button>
        <button onClick={this.reinit}>Reinit</button>
      </div>
    );
  }
}

Incrementer.defaultProps = {
  start: 0,
  step: 1,
};

class ManualIncrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: 0 };
  }

  increment(e) {
    e.preventDefault();
    this.setState({ n: this.state.n + 1 });
  }

  render() {
    return (
      <div>
        Valeur : {this.state.n}{" "}
        <button onClick={this.increment.bind(this)}>Incrémenter</button>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <Welcome name="Dorothée" />
      <Welcome name="Jean" />
      <Incrementer />
    </div>
  );
}

ReactDOM.render(<Home />, document.querySelector("#app"));

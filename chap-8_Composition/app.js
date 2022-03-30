const app = document.getElementById("app");

function Button({ type, children }) {
  const className = "btn btn-" + type;
  return <button className={className}>{children}</button>;
}

function PrimaryButton({ children }) {
  return <Button type="primary">{children}</Button>;
}

function SecondaryButton({ children }) {
  return <Button type="secondary">{children}</Button>;
}

function Column2({ left, right }) {
  return (
    <div className="row">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <Column2
          left={<PrimaryButton>Envoyer</PrimaryButton>}
          right={<SecondaryButton>Supprimer</SecondaryButton>}
        />
      </div>
    );
  }
}

ReactDOM.render(<Home />, app);

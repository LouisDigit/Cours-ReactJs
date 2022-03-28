/* 
  JSX est une syntaxe qui permet d'utiliser la
  librairie React plus facilement

  Les navigateurs ne supportent pas cette syntaxe il faut donc
  utiliser Babel pour compiler notre code écrit en JSX vers un Javascript
  qui sera supporté par les navigateurs
*/

let n = 0;

function numberFormat(n) {
  return n.toString().padStart(2, "0");
}

/* 
  Syntaxe JSX + Utilisation d'un code JS valide entre {}
  - Un seul element racine a la création d'un élément
  - React.Fragment pour utiliser l'élément parent
*/
function render() {
  const items = ["Tache 1", "Tache 2", "Tache 3"];
  const title = (
    <React.Fragment>
      <h1 id="title" className="class-title">
        Bonjour les gens <span>{n % 2 ? numberFormat(n) : null}</span>
      </h1>
      <ul>
        {items.map((item, k) => (
          <li key={k}>{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );

  ReactDOM.render(title, document.querySelector("#app"));
}

window.setInterval(() => {
  n++;
  render();
}, 1000);

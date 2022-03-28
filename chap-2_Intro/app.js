/* 
    Création d'un élément avec React.creatElement() :
        1er paramètre    -> nom du tag
        2eme paramètre   -> attribut de la balise
        3eme paramètre   -> enfant de la balise (ou son contenu)

    Ajout d'un élément dans la page avec React.render() :
        1er paramètre    -> élément à ajouter
        2ème paramètee   -> élément parent
*/

let n = 0;

// Uniquement la span est modifié
function render() {
  const title = React.createElement(
    "h1",
    {},
    "Bonjour tout le monde ",
    React.createElement("span", {}, n)
  );
  ReactDOM.render(title, document.querySelector("#app"));
}

// Toute la balise #app est modifié
function render2() {
  document.querySelector("#app").innerHTML =
    "<h1>Bonjour tout le monde <span>" + n + "</span></h1>";
}

window.setInterval(() => {
  n++;
  render();
}, 1000);

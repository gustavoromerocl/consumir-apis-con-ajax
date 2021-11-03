//Control del DOM
import { ToDo } from './ToDo.js'

window.addEventListener('load', (ev) => {
  let container = document.querySelector('#root ul')
  //console.log(container);
  //ToDo.all => retorna los todos del servicio web
  ToDo.all().then(todos => {
    //iteramos todos los todos
    todos.forEach(todo => {
      //contruimos un nodo del DOM con buildDOMElement
      let node = buildDOMElement(todo);
      //container.appendChild(node);

      //Insertamos el nodo en el contenedor
      container.prepend(node);
    })
  });

  let buildDOMElement = (todo) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <h1>${todo.title}</h1>
    `
    console.log(li);
    return li;
  }
})
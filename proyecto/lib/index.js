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

      editInPlace(node.querySelector('h1'), todo);
    })
  });

  let buildDOMElement = (todo) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <h1>${todo.title}</h1>
    `
    //console.log(li);
    
    return li;
  }

  let editInPlace = (node, todo) => {
    node.addEventListener('click', (ev) => {
      //Reemplazar el nodo por un campo de texto, al finalizar la edición debemos reemplazar el campo de texo por un nuevo nodo
      let inputText = document.createElement('textarea');
      inputText.value = node.innerHTML;
      inputText.autofocus = true;

      node.replaceWith(inputText);

      inputText.addEventListener('change', (ev) => {
        inputText.replaceWith(node);
        todo.title = ev.target.value;

        node.innerHTML = todo.title;
        
        todo.save().then(r => console.log(r));
      })
    })

  }
})
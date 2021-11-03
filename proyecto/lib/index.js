//Control del DOM
import { ToDo } from './ToDo.js'

window.addEventListener('load', (ev) => {
  ToDo.all().then(todos => console.log(todos));
})
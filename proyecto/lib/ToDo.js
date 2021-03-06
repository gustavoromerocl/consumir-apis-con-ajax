//consultar via objetos y metodos
import performer from './request.js';

export class ToDo{

  constructor(args){
    this.userId = args.userId;
    this.title = args.title;
    this.completed = args.completed;
    this.id = args.id;
  }

  static async all(){
    let todos = await performer({
      type: "listAll"
    });
    //onsole.log(todos);
    return todos.map( todoJSON => new ToDo(todoJSON))
  }

  save = async () => {
    if(this.id) return this.update();

    this.create();
  }

  create = async () => {

  }

  update = async () => {
    let response = await performer({
      type: "update",
      payload: {
        id: this.id,
        title: this.title
      }
    });
    return response;
  }

  destroy = async () => {
    let response = await performer({
      type: "destroy",
      payload: {
        id: this.id
      }
    })
    return response;
  }
}
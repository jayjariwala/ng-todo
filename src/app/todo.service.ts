import { Injectable } from '@angular/core';
import { Todoitem } from "./model/todo.model";
import { Subject } from 'rxjs';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  id: number = 0;
  todoList: Todoitem [] = [];
  todoChange = new Subject<Todoitem []>();
  doneChange = new Subject<Todoitem []>();
  constructor() { }

  addTodoItem(todo) {
    this.todoList.push({ id: this.id, item: todo, done: false });
    this.id++;
    this.todoChange.next(this.fetchTodoList());
  }

  fetchTodoList() {
    return this.todoList.filter((todoitem) => {
       return todoitem.done === false;
    }).reverse();
  }

  fetchDoneList() {
    return this.todoList.filter((doneItem) => {
      return doneItem.done === true;
    })
  }

  setDone(item) {
    this.todoList[item.id] = { id: item.id , item: item.item , done: true}
    this.todoChange.next(this.fetchTodoList());
    this.doneChange.next(this.fetchDoneList());
  }
}

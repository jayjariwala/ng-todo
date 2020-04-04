import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todoitem } from "../model/todo.model";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit, OnDestroy {
  todoList: Todoitem [] = [];
  todoSubscription: Subscription;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.fetchTodoList();
    this.todoSubscription = this.todoService.todoChange
      .subscribe(
        (list: Todoitem[]) => {
          this.todoList = list;
        }
      )
  }

  ngOnDestroy() {
    this.todoSubscription.unsubscribe();
  }

  todoDone(item) {
    this.todoService.setDone(item);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  @ViewChild('f', {static: false}) todoForm: NgForm;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    const item = this.todoForm.value.todoitem;
    this.todoService.addTodoItem(item);
    this.todoForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { Todoitem } from '../model/todo.model';
import { Subscription } from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-donelist',
  templateUrl: './donelist.component.html',
  styleUrls: ['./donelist.component.css']
})
export class DonelistComponent implements OnInit {
  doneList: Todoitem [] = [];
  doneListSubscription: Subscription;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.doneList = this.todoService.fetchDoneList();
    this.doneListSubscription = this.todoService.doneChange
      .subscribe(
        (list: Todoitem[]) => {
          console.log(list);
          this.doneList = list;
        }
      )
  }

  ngOnDestroy() {
    this.doneListSubscription.unsubscribe();
  }

}

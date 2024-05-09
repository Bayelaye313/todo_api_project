import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../../server/model/Itodo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app';
  allTodos: Itodo[] = [];
  constructor(private todoService: TodoService){};

  ngOnInit(): void {
    this.todoService.getTodos()
    .subscribe(
      {
        next: (todos) => {
          this.allTodos = todos;
          console.log(todos)
        }
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../../server/model/Itodo';
import { TodoService } from './todo.service';
import { mergeMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app';
  allTodos: Itodo[] = [];
  newTodotask:string = '';
  newTodoDate: string = '';
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

  createNewTodo(){
    const todoPayload = {
      task: this.newTodotask,
      dateDue: this.newTodoDate
    };
    this.todoService.createNewTodo(todoPayload)
    .pipe(
      mergeMap(()=>this.todoService.getTodos()),
      tap((refreshedTodos)=> this.allTodos = refreshedTodos)
    )
    .subscribe({
      next: (rslt) =>{
        console.log(rslt)
      }
    })
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Itodo} from '../../../../server/model/Itodo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
@Input() todos:Itodo[] = [];
@Output() changed = new EventEmitter<Itodo>();
@Output() deleted = new EventEmitter<Itodo>();
toggleTodoDoneState(todo:Itodo){
  todo.done = !todo.done;
  this.changed.emit(todo);
}
removeTodo(todo:Itodo){
  this.deleted.emit(todo)
}
}

import { Component, Input } from '@angular/core';
import {Itodo} from '../../../../server/model/Itodo'
@Component({
  selector: 'app-todo-table',
  standalone: true,
  imports: [],
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.css'
})
export class TodoTableComponent {
@Input() todos: Itodo[] = [];

}

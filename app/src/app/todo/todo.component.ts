import { Component, Input } from '@angular/core';
import {Itodo} from '../../../../server/model/Itodo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
@Input() todos:Itodo[] = [];
}

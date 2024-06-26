import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itodo } from '../../../server/model/Itodo';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getTodos():Observable<Itodo[]>{
    return this.http.get<{status:string, data: Itodo[]}>(`${this.baseUrl}/todos`)
    .pipe(
      map(response =>response.data)
    )
  }

  createNewTodo(newTodo:{task: string, dateDue: string}){
    return this.http.post(`${this.baseUrl}/todos`, newTodo);
  }

  updateTodoDoneState(todo:Itodo){
    const {id, done} = todo;
    return this.http.patch(`${this.baseUrl}/todos/${id}`, {done});
  }
  
  deleteTodo(todo:Itodo){
    const {id} = todo;
    return this.http.delete(`${this.baseUrl}/todos/${id}`);
  }

}

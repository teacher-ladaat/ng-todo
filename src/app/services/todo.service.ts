import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _mockTodos: Todo[] = [
    {
      id: crypto.randomUUID(),
      title: 'Buy groceries',
      description: 'Get milk, bread, and eggs',
      isCompleted: false,
      isArchived: false,
      endDate: new Date('2026-03-16'),
    },
    {
      id: crypto.randomUUID(),
      title: 'Walk the dog',
      description: 'Take Fido for a walk in the park',
      isCompleted: false,
      isArchived: false,
      endDate: new Date('2026-06-15'),
    },
    {
      id: crypto.randomUUID(),
      title: 'Read a book',
      description: 'Finish reading "The Great Gatsby"',
      isCompleted: false,
      isArchived: false,
      endDate: new Date('2026-06-13'),
    },
    {
      id: crypto.randomUUID(),
      title: 'Go to the gym',
      description: 'Workout for an hour',
      isCompleted: false,
      isArchived: false,
      endDate: new Date('2026-06-14'),
    },
  ];

  private _todosSubject = new BehaviorSubject<Todo[]>(this._mockTodos);
  todos$: Observable<Todo[]> = this._todosSubject.asObservable();

  private _selectedTodoSubject = new BehaviorSubject<Todo>(this._mockTodos[0]);
  selectedTodo$: Observable<Todo | undefined> = this._selectedTodoSubject.asObservable();
  set selectedTodo(todo: Todo) {
    this._selectedTodoSubject.next(todo);
  }
  completeTodo() {
    this._selectedTodoSubject.value.isCompleted = true;
  }
  archiveTodo() {
    this._selectedTodoSubject.value.isArchived = true;
  }
}

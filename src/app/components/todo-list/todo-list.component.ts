import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, MaterialModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todoService = inject(TodoService);
  activeTodo?: Todo;

  onTodoSelect($event: PointerEvent, todo: Todo) {
    $event.preventDefault();
    this.activeTodo = todo;
    this.todoService.selectedTodo = todo;
  }
}

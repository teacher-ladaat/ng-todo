import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, MaterialModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  todoService = inject(TodoService);
  activeTodo?: number | string;
}

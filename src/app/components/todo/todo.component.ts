import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, MaterialModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
    todo$ = inject(TodoService).selectedTodo$;
}

import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TodoListComponent, TodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

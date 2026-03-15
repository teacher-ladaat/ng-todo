import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  imports: [Header, TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

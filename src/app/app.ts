import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { TodoList } from './components/todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [Header, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-todo');
}

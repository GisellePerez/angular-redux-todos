import { Component, OnInit } from '@angular/core';
import { ToggleAllTodosAction } from './todo.actions';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completed = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completed = !this.completed;

    const action = new ToggleAllTodosAction(this.completed);
    this.store.dispatch(action);
  }

}

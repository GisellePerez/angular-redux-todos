import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styles: []
})
export class TodosFooterComponent implements OnInit {

  activeTodos;

  validfilters: fromFilter.validFilters[] = ['all', 'active', 'completed'];
  currentFilter: fromFilter.validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.countActiveTodos(state.todos);
      this.currentFilter = state.filter;
    });

  }

  chooseFilter(newFilter: fromFilter.validFilters) {
    const action = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  countActiveTodos(todos: Todo[]) {
    this.activeTodos = todos.filter( todo => !todo.completed).length;
  }

  clearAllCompletedTodos() {
    const action = new fromTodo.ClearAllCompletedTodosAction();
    this.store.dispatch(action);
  }

}

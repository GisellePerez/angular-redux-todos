// unificar todos los reducers de la app
import { Todo } from './todo/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';

import * as fromFilterActions from './filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filter: fromFilterActions.validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todosReducer,
  filter: fromFilter.filterReducer
};


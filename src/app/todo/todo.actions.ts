import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add todo';

export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle all todos';

export const EDIT_TODO = '[TODO] Edit todo';
export const DELETE_TODO = '[TODO] Delete todo';

export const CLEAR_ALL_COMPLETED_TODO = '[TODO] Clear all completed todos';



export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  constructor (public text: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;
  constructor (public id: number) {}
}

export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;
  constructor (public id: number, public text: string) {}
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;
  constructor (public id: number) {}
}

export class ToggleAllTodosAction implements Action {
  readonly type = TOGGLE_ALL_TODO;
  constructor (public completed: boolean) {}
}

export class ClearAllCompletedTodosAction implements Action {
  readonly type = CLEAR_ALL_COMPLETED_TODO;
}

export type Actions =
  AddTodoAction |
  ToggleTodoAction |
  EditTodoAction |
  DeleteTodoAction |
  ToggleAllTodosAction |
  ClearAllCompletedTodosAction;

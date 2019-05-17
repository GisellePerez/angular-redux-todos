
import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('Save the world');
const todo2 = new Todo('Defeat Thanos');
const todo3 = new Todo('Go drinking with Thor');
todo2.completed = true;

const initialState: Todo[] = [todo1, todo2, todo3];

export function todosReducer(state = initialState, action: fromTodo.Actions): Todo[] {

  switch (action.type) {

    case fromTodo.ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];

    case fromTodo.TOGGLE_TODO:
      // const todo = new Todo(action.id);
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          // siempre retornar un NUEVO OBJETO DE TIPO TODO
          return {
            ...todoEdit,
            completed: !todoEdit.completed
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.EDIT_TODO:
      return state.map(todoEditText => {
        if (todoEditText.id === action.id) {
          return {
            ...todoEditText,
            text: action.text
          };
        } else {
          return todoEditText;
        }
      });


    case fromTodo.TOGGLE_ALL_TODO:
    return state.map( todoEdit => {
      return {
        ...todoEdit,
            completed: action.completed
      };
    });

    case fromTodo.DELETE_TODO:
      return state.filter(todoEdit => (todoEdit.id !== action.id));

    case fromTodo.CLEAR_ALL_COMPLETED_TODO:
      return state.filter(todoEdit => !todoEdit.completed);

    default:
      return state;
  }
}


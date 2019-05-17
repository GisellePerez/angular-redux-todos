import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputToEdit') txtInputToEdit: ElementRef;

  checkField: FormControl;
  txtInput: FormControl;
  editing: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.checkField.valueChanges.subscribe( checkValue => {
      // console.log(checkValue);
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });

  }

  editTodoText() {
    this.editing = true;
    setTimeout( () => {
      this.txtInputToEdit.nativeElement.select();
    }, 1);
  }

  finishEdition() {
    this.editing = false;

    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.text) {
      return;
    }

    const action = new EditTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  deleteTodo() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

}

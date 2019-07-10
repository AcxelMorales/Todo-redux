import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store'

import { AppState } from 'src/app/app.reducers';
import * as act from 'src/app/todo/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.txtInput = new FormControl(null, Validators.required);
  }

  public addTodo() {
    if (this.txtInput.invalid) return;
    this.store.dispatch(new act.AddTodoAction(this.txtInput.value));
    this.txtInput.setValue('');
  }

}

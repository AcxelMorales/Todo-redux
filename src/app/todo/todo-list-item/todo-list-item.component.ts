import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Todo } from '../model/todo.model';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styles: []
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtFisico', null) txtFisico: ElementRef;

  check: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.check = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.check.valueChanges
      .subscribe(() => this.store.dispatch(new ToggleTodoAction(this.todo.id)));
  }

  public edit(): void {
    this.editando = true;

    setTimeout(() => {
      this.txtFisico.nativeElement.select();
    }, 1);
  }

  public endEdit(): void {
    this.editando = false;

    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.todo.texto) return;

    this.store.dispatch(new EditTodoAction(this.todo.id, this.txtInput.value));
  }

  public delete(): void {
    this.store.dispatch(new DeleteTodoAction(this.todo.id));
  }

}

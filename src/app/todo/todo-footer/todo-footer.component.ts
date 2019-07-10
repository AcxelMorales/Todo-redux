import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { filters, SetFliterAcion } from 'src/app/filter/filter.actions';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import { DeleteAllCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  
  slopes: number;
  filters: filters[] = ['All', 'Active', 'Completed'];
  filterNow: filters;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filterNow = state.filter
      this.countSlopes(state.todos);
    });
  }

  public changeFilter(filter: filters): void {
    this.store.dispatch(new SetFliterAcion(filter));
  }

  countSlopes(todos: Todo[]): void {
    this.slopes = todos.filter(todo => !todo.completado).length;
  }

  public deleteCompleted(): void {
    this.store.dispatch(new DeleteAllCompleted());
  }

}

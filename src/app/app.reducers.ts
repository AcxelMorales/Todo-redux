import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todo/model/todo.model';
import { todoReducer } from './todo/todo.reducer';
import { filterReducer } from './filter/filter.reducer';
import { filters } from './filter/filter.actions';

export interface AppState {
    todos: Todo[];
    filter: filters;
};

export const REDUCERS: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
};
import { Action } from '@ngrx/store';

export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle all todo';

export const ADD_TODO = '[TODO] Add todo';
export const EDIT_TODO = '[TODO] Edit todo';
export const DELETE_TODO = '[TODO] Delete todo';
export const DELETE_ALL_COMPLETED = '[TODO] Delete all completed all';

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) { }
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;

    constructor(public completado: boolean) { }
}

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor(public texto: string) { }
}

export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;

    constructor(
        public id: number,
        public texto: string
    ) { }
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;

    constructor(public id: number) { }
}

export class DeleteAllCompleted implements Action {
    readonly type = DELETE_ALL_COMPLETED;
}

export type Actions = ToggleTodoAction |
                      ToggleAllTodoAction |
                      AddTodoAction |
                      EditTodoAction |
                      DeleteTodoAction | 
                      DeleteAllCompleted;

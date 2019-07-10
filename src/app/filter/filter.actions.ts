import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] Set Filter';

export type filters = 'All' | 'Active' | 'Completed';

export class SetFliterAcion implements Action {
    readonly type = SET_FILTER;

    constructor(public filter: filters) { }
}

export type actions = SetFliterAcion;
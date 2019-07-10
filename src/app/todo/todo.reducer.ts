import * as act from './todo.actions';
import { Todo } from './model/todo.model';

const stateInitial: Todo[] = [];

export const todoReducer = (state = stateInitial, action: act.Actions): Todo[] => {
    switch (action.type) {
        case act.ADD_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];
        case act.TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completado: !todo.completado
                    };
                } else {
                    return todo;
                }
            });
        case act.TOGGLE_ALL_TODO:
            return state.map(todo => {
                return {
                    ...todo,
                    completado: action.completado
                };
            });
        case act.EDIT_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        texto: action.texto
                    };
                } else {
                    return todo;
                }
            });
        case act.DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case act.DELETE_ALL_COMPLETED:
            return state.filter(todo => !todo.completado);
        default: return state;
    }
};
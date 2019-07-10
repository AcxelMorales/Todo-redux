import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from '../todo/model/todo.model';
import { filters } from './filter.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filters): Todo[] {
    switch (filter) {
      case 'Completed':
        return todos.filter(todo => todo.completado);
      case 'Active':
        return todos.filter(todo => !todo.completado);
      default: return todos;
    }
  }

}

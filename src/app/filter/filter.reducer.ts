import * as fromFilter from './filter.actions';

const initialState: fromFilter.validFilters = 'all';

export function filterReducer(state = initialState, action: fromFilter.actions): fromFilter.validFilters {

  switch (action.type) {

    case fromFilter.SET_FILTER:
      // cuando retornamos un string estamos retornando OTRO objeto porque puede ser considerado primitivo
      return action.filter;

    default:
      return state;

  }

}


import * as act from './filter.actions';

const initState: act.filters = 'All';

export const filterReducer = (state = initState, action: act.actions): act.filters => {
    switch (action.type) {
        case act.SET_FILTER:
            return action.filter;
        default: return state;         
    }
};
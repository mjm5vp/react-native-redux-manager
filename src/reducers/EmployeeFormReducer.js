import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shiftDay: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === { prop: 'name', value: 'jane' }
      // console.log('employee Update');
      // console.log(`prop: ${action.payload.prop} hhh`);
      // console.log(`value: ${action.payload.value}`);
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

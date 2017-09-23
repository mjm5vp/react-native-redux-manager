import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
  // console.log(`prop ${prop}`);
  // console.log(`value ${value}`);
  // console.log(EMPLOYEE_UPDATE);
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

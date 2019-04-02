import { INPUT_CHANGE } from './types';

const content = [
  {
    id: 1,
    name: 'Desmond',
    date: 'Nov 4 1993',
    email: 'desmond@pilotx.tv',
    plan: 'Custom',
  }, {
    id: 2,
    name: 'Desmond2',
    date: 'Nov 4 1955',
    email: 'desmond2@pilotx.tv',
    plan: 'paid',
  },
];

export const changeInput = ({ prop, value }) => (dispatch) => {
  dispatch({ type: INPUT_CHANGE, prop, value });
};

export const fetchData = search => (dispatch) => {
  const results = content.reduce((prev, curr) => {
    if (curr.name === search) {
      prev.push(curr);
    }
    return prev;
  }, []);
  dispatch({ type: 'FETCH_DATA', payload: results });
};

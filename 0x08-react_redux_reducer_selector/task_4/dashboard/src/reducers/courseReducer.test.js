// reducers/courseReducer.test.js
import { Map } from 'immutable';
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialState = Map({
    courses: Map()
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'Course 1' },
        { id: 2, name: 'Course 2' }
      ]
    };
    const newState = courseReducer(initialState, action);
    expect(newState.get('courses').toJS()).toEqual({
      1: { id: 1, name: 'Course 1' },
      2: { id: 2, name: 'Course 2' }
    });
  });

  it('should handle SELECT_COURSE', () => {
    const action = { type: SELECT_COURSE, index: 1 };
    const initial = Map({ courses: Map({ 1: { id: 1, isSelected: false } }) });
    const newState = courseReducer(initial, action);
    expect(newState.getIn(['courses', 1, 'isSelected'])).toBe(true);
  });

  it('should handle UNSELECT_COURSE', () => {
    const action = { type: UNSELECT_COURSE, index: 1 };
    const initial = Map({ courses: Map({ 1: { id: 1, isSelected: true } }) });
    const newState = courseReducer(initial, action);
    expect(newState.getIn(['courses', 1, 'isSelected'])).toBe(false);
  });
});


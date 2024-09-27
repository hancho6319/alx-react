import { courseReducer } from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialState = [];

  const coursesData = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  const coursesWithSelection = [
    { id: 1, name: "ES6", credit: 60, isSelected: false },
    { id: 2, name: "Webpack", credit: 20, isSelected: true },
    { id: 3, name: "React", credit: 40, isSelected: false },
  ];

  it('should return the default state, an empty array, when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the data with isSelected as false when FETCH_COURSE_SUCCESS is passed', () => {
    const state = courseReducer(undefined, {
      type: FETCH_COURSE_SUCCESS,
      data: coursesData,
    });

    const expectedState = coursesData.map(course => ({
      ...course,
      isSelected: false,
    }));

    expect(state).toEqual(expectedState);
  });

  it('should set isSelected to true for the correct course when SELECT_COURSE is passed', () => {
    const state = courseReducer(coursesWithSelection, {
      type: SELECT_COURSE,
      index: 2,
    });

    expect(state[1].isSelected).toBe(true);
  });

  it('should set isSelected to false for the correct course when UNSELECT_COURSE is passed', () => {
    const state = courseReducer(coursesWithSelection, {
      type: UNSELECT_COURSE,
      index: 2,
    });

    expect(state[1].isSelected).toBe(false);
  });
});


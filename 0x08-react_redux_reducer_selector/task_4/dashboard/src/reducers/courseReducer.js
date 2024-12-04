import Immutable from 'immutable';
import { normalize } from 'normalizr';
import { course, coursesNormalizer } from '../schema/courses';

import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

const initialState = Immutable.fromJS({
  entities: { courses: {} },
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const { entities } = normalize(action.data, [course]);
      return state.mergeDeep({ entities });
    case SELECT_COURSE:
      return state.setIn(['entities', 'courses', action.index, 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn(['entities', 'courses', action.index, 'isSelected'], false);
    default:
      return state;
  }
};

export default courseReducer;
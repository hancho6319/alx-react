import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { boundSelectCourse, boundUnSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

const mockStore = configureStore([thunk]);

describe('Bound Course Action Creators', () => {
  it('dispatches selectCourse with the correct index', () => {
    const store = mockStore();
    const dispatch = store.dispatch;
    const boundAction = boundSelectCourse(dispatch);

    boundAction(1);

    expect(store.getActions()).toEqual([{ type: SELECT_COURSE, index: 1 }]);
  });

  it('dispatches unSelectCourse with the correct index', () => {
    const store = mockStore();
    const dispatch = store.dispatch;
    const boundAction = boundUnSelectCourse(dispatch);

    boundAction(1);

    expect(store.getActions()).toEqual([{ type: UNSELECT_COURSE, index: 1 }]);
  });
});

import Immutable from 'immutable';
import { normalize } from 'normalizr';
import { notification, notificationsNormalizer } from '../schema/notifications';

import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

const initialState = Immutable.fromJS({
  filter: 'DEFAULT',
  entities: { notifications: {} },
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const { entities } = normalize(action.data, [notification]);
      return state.mergeDeep({ entities });
    case MARK_AS_READ:
      return state.setIn(['entities', 'notifications', action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
};

export default notificationReducer;
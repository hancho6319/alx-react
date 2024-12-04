import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  loginSuccess,
  loginFailure,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('UI Action Creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('loginRequest dispatches LOGIN and LOGIN_SUCCESS on success', async () => {
    fetchMock.getOnce('/login-success.json', { body: {}, headers: { 'content-type': 'application/json' } });

    const store = mockStore({});
    await store.dispatch(loginRequest('email@example.com', 'password'));

    const actions = store.getActions();
    expect(actions).toEqual([
      { type: LOGIN, user: { email: 'email@example.com', password: 'password' } },
      { type: LOGIN_SUCCESS },
    ]);
  });

  it('loginRequest dispatches LOGIN and LOGIN_FAILURE on failure', async () => {
    fetchMock.getOnce('/login-success.json', 500);

    const store = mockStore({});
    await store.dispatch(loginRequest('email@example.com', 'password'));

    const actions = store.getActions();
    expect(actions).toEqual([
      { type: LOGIN, user: { email: 'email@example.com', password: 'password' } },
      { type: LOGIN_FAILURE },
    ]);
  });
});

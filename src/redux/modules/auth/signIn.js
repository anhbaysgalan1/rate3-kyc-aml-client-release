import { from } from 'seamless-immutable';
import { createReducer, createSubmitAction, createAction } from '../../../utils/actions';

export const SIGN_IN = 'auth/signIn/SIGN_IN';
export const END_SIGNIN = 'auth/signIn/END_SIGNIN';
export const RESET_STORE = 'auth/signIn/RESET_STORE';

export const signIn = createSubmitAction(SIGN_IN);
export const endSignIn = createAction(END_SIGNIN);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  spinner: false,
  step: 'signIn',
  isVerified: false,
});

export default createReducer({
  [signIn.REQUEST]: (state) => (
    state.merge({
      spinner: true
    })
  ),

  [signIn.SUCCESS]: (state, { payload }) => (
    state.merge({
      spinner: false,
      ...payload
    })
  ),

  [signIn.FAILURE]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [RESET_STORE]: (state) => (
    state.merge(initialState)
  )
}, initialState);

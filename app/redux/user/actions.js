/**
 * created by Inspire UI @author(dang@inspireui.com)
 * @format
 */

import * as types from "./types";

/**
 * login user
 */
export const loginPending = () => ({
  type: types.LOGIN_FETCHING,
});
export const logoutUser = () => ({
  type: types.LOGOUT,
});


export const loginSuccess = (data) => (
    {
  type: types.LOGIN_SUCCESS,
  payload: data,
});

export const BrakeTimes = (data) => (
    {
      type: types.GET_BRAKETIMES,
      payload: data,
    });

export const checkIn = (data) => (
    {
        type: types.CHECK_IN,
        payload: data,
    });

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
  error: true,
});

/**
 * register user
 */
export const registerPending = () => ({
  type: types.REGISTER_FETCHING,
});

export const registerSuccess = () => ({
  type: types.REGISTER_SUCCESS,
});

export const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
  error: true,
});


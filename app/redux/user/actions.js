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
export const currentAddress = (data) => (
    {
        type: types.CURRENT_ADDRESS,
        payload: data,
    });
export const deliveryAddress = (data) => (
    {
        type: types.DELIVERY_ADDRESS,
        payload: data,
    });
export const SaveServiceProvider = (data) => ({
    type: types.ServiceProvider,
    payload:data
});
export const getLeaves = (data) => (
    {
        type: types.GET_LEAVES,
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
export const clearData = (data) => (
    {
        type: types.CLEAR_DATA,
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


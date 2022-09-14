import * as types from './types'
import { useSelector } from 'react-redux'

/**
 * initial app
 */
export const beginInitApp = () => ({
  type: types.INITIAL_APP
})

/**
 * intro screen
 */
export const finishIntro = () => ({
  type: types.FINISH_INTRO
})

export const saveDeviceInfo = (deviceInfo) => ({
  type: types.SAVE_DEVICE_INFO,
  payload: deviceInfo
})


export const saveProblemList = (list) => ({
  type: types.PROBLEMS_LIST,
  payload: list
})

export const saveFcmToken = (token) => ({
  type: types.SAVE_FCM_TOKEN,
  payload: token
})



export const changeLanguage = (value) => ({
  type: types.LANGUAGE_CHANGE,
  payload: value
})

export const changeRtl = (value) => ({
  type: types.LANGUAGE_CHANGE,
  payload: {
    value
  }
})

export const changeTheme = (value) => ({
  type: types.CHANGE_THEME,
  payload: value
})

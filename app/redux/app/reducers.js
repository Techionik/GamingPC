import * as types from './types'

const initialState = {
  finishIntro: false,
  enableNotification: false,
  fcmToken: '',
  refer_user_id: '',
  language: {
    lang: 'en',
    rtl: false
  },
  isOpenSidemenu: false,
  netInfoConnected: true,
  toast: {
    list: []
  },
  notification: {
    list: []
  },
  notificationList: [],
  msgCount: 0,
  airpotCities: [],
  rate_done: false,
  dialogObj: undefined,
  isPointsClaim: false,
  deviceInfo: '',
  bannerCount: 0,
  /* light theme is true and dark theme is false */
  theme: 'light',
  languagee: 'en',
  problemList:[]
}

/*
* shareModal
*
* */

export default (state = initialState, action) => {
  const { type, payload, error, meta } = action
  switch (type) {
    case types.FINISH_INTRO: {
      return {
        ...state,
        finishIntro: true
      }
    }
    case types.BANNER_COUNT: {
      return {
        ...state,
        bannerCount: payload
      }
    }
    case types.NOTIFICATION_ENABLE: {
      return {
        ...state,
        enableNotification: true
      }
    }
    case types.SAVE_DEVICE_INFO: {
      return {
        ...state,
        deviceInfo: payload
      }
    }
    case types.CHANGE_THEME: {
      return {
        ...state,
        theme: payload
      }
    }
    case types.RTL_CHANGE: {
      return {
        ...state,
        rtl:payload.value

      }
    }

    case types.NOTIFICATION_DISABLE: {
      return {
        ...state,
        enableNotification: false
      }
    }

    case types.PROBLEMS_LIST: {
      return {
        ...state,
        problemList: payload
      }
    }

    case types.NOTIFICATION_TOGGLE: {
      return {
        ...state,
        enableNotification: payload.value
      }
    }

    case types.SAVE_PUSH_NOTIFICATION: {
      return {
        ...state,
        notificationList: payload.notification,
        msgCount: payload.msgCount
      }
    }
    case types.SAVE_FCM_TOKEN: {
      return {
        ...state,
        fcmToken: payload
      }
    }
    case types.PN_COUNT: {
      return {
        ...state,
        msgCount: payload
      }
    }
    case types.ADD_REFER_ID: {
      return {
        ...state,
        refer_user_id: payload
      }
    }
    case types.SAVE_AIRPOTS_CITIES: {
      return {
        ...state,
        airpotCities: payload,
        isFetching: false,
        error: error
      }
    }
    case types.RATING_DONE: {
      return {
        ...state,
        rate_done: true
      }
    }
    case types.START_FETCHING: {
      return {
        ...state,
        isPointsClaim: true
      }
    }
    case types.STOP_FETCHING: {
      return {
        ...state,
        isPointsClaim: false
      }
    }
    case types.DIALOG_OPENING: {
      return Object.assign({}, {
        ...state,
        dialogObj: payload
      })
    }

    case types.DIALOG_CLOSING: {
      return {
        ...state,
        dialogObj: undefined
      }
    }
    case types.LANGUAGE_CHANGE: {
      return {
        ...state,
        languagee: payload
      }
    }

    case types.RTL_CHANGE: {
      return {
        ...state,
        ...payload.value

      }
    }

    /**
         * sidemenu
         */
    case types.SIDEMENU_OPEN: {
      return {
        ...state,
        isOpenSidemenu: true
      }
    }

    case types.SIDEMENU_CLOSE: {
      return {
        ...state,
        isOpenSidemenu: false
      }
    }

    case types.SIDEMENU_TOGGLE: {
      if (!payload || (payload && typeof payload.isOpen === 'undefined')) {
        return {
          ...state,
          isOpenSidemenu: !state.isOpenSidemenu
        }
      }
      return {
        ...state,
        isOpenSidemenu: payload.isOpen
      }
    }

    case types.UPDATE_CONNECTION_STATUS: {
      return {
        ...state,
        netInfoConnected: payload.netInfoConnected
      }
    }

    case types.ADD_TOAST: {
      return {
        ...state,
        toast: {
          list: state.toast.list.some((toast) => toast.msg === payload.msg)
            ? state.toast.list
            : [payload, ...state.toast.list]
        }
      }
    }
    case types.REMOVE_TOAST: {
      return {
        ...state,
        toast: {
          list: state.toast.list.filter((msg) => msg.key !== payload.key)
        }
      }
    }

    case types.ADD_NOTIFICATION: {
      return {
        ...state,
        notification: {
          list: state.notification.list.some((toast) => toast.msg === payload.msg)
            ? state.notification.list
            : [payload, ...state.notification.list]
        }
      }
    }
    case types.REMOVE_NOTIFCATION: {
      return {
        ...state,
        notification: {
          list: state.notification.list.filter((msg) => msg.key !== payload.key)
        }
      }
    }
    default:
      return state
  }
}

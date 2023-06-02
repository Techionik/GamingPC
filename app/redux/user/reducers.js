import * as types from './types'
import {ServiceProvider} from "./actions";
// import { addAndUpdateUserAddress, deleteUserAddress } from "./utils";

const initialState = {
    userInfo: undefined,
    currentAddress: "undefined",
    deliveryAddress: "undefined",
    ServiceType: "",
    brakeTime:[],
    checkIn:undefined,
    accessToken: null,
    expiresAt: null,
    isFetching: false,
    isSocialLogin: false,
    flipCardLoader: false,
    error: null,
    selectedResponse: undefined,
    stories: {},
    Leaves:[]
}

export default (state = initialState, action) => {
    const {type, payload, error, meta} = action

    switch (type) {
        case types.USER_CREATE_ADDRESS_FETCHING:
        case types.USER_DELETE_ADDRESS_FETCHING:
        case types.USER_UPDATE_ADDRESS_FETCHING:
        case types.USER_UPDATE_DEFAULT_ADDRESS_FETCHING:
        case types.LOGIN_FETCHING:
        case types.REGISTER_FETCHING:
        case types.USER_INFO_FETCHING: {
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case types.SOCIAL_LOGIN_FETCHING: {
            return {
                ...state,
                isSocialLogin: true,
                error: null
            }
        }

        case types.USER_CREATE_ADDRESS_FAILURE:
        case types.USER_DELETE_ADDRESS_FAILURE:
        case types.USER_UPDATE_ADDRESS_FAILURE:
        case types.USER_UPDATE_DEFAULT_ADDRESS_FAILURE:
        case types.LOGIN_FAILURE:
        case types.REGISTER_FAILURE:
        case types.USER_INFO_FAILURE: {
            return {
                ...state,
                isFetching: false,
                isSocialLogin: false,
                error: payload
            }
        }

        case types.LOGIN_SUCCESS: {
            return {
                ...state,
                userInfo: payload,
                isFetching: false,
                error: null,
            };
        }
        case types.CURRENT_ADDRESS: {
            return {
                ...state,
                currentAddress: payload,
                isFetching: false,
                error: null,
            };
        }

        case types.DELIVERY_ADDRESS: {
            return {
                ...state,
                deliveryAddress: payload,
                isFetching: false,
                error: null,
            };
        }


        case types.ServiceProvider: {
            return {
                ...state,
                ServiceType: payload,
                isFetching: false,
                error: null,
            };
        }
        case types.GET_LEAVES: {
            return {
                ...state,
                Leaves: payload,
            };
        }
        case types.GET_BRAKETIMES: {
            return {
                ...state,
                brakeTime: payload,
            };
        }
        case types.CHECK_IN: {
            return {
                ...state,
                checkIn: payload,
            };
        }
        case types.CLEAR_DATA: {
            return {
                ...state,
                checkIn: payload,
            };
        }

        case types.FILIP_FLOP_FETCHING: {
            return Object.assign({}, {
                ...state,
                flipCardLoader: true,
                error: null
            })

            // return {
            //   ...state,
            //   userInfo: payload,
            //   isFetching: false,
            //   isSocialLogin:false,
            //   error: null,
            // };
        }
        case types.FILIP_FLOP_STOP: {
            return Object.assign({}, {
                ...state,
                flipCardLoader: false,
                error: null
            })
        }
        case types.SAVE_STORIES: {
            return Object.assign({}, {
                ...state,
                stories: payload,
                error: null
            })
        }
        case types.DOWNLOAD_AUDIO: {
            if (!state.stories) {
                return state
            }
            return Object.assign({}, {
                ...state,
                stories: {...state.stories, downloadAudio: payload},
                error: null
            })
        }


        case types.REGISTER_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                isSocialLogin: false,
                error: null
            }
        }

        case types.USER_UPDATE_DEFAULT_ADDRESS_SUCCESS:
        case types.USER_INFO_SUCCESS: {
            return {
                ...state,
                userInfo: payload,
                isFetching: false,
                isSocialLogin: false,
                error: null
            }
        }

        case types.LOGOUT: {
            return {
                ...initialState
            }
        }
        case types.LOGIN_RESPONSE_UPDATE: {
            return {
                ...state,
                selectedResponse: payload
            }
        }

        default:
            return state
    }
}

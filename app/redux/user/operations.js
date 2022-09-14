import * as actions from "./actions";
import {downloadAudio, loginSuccess, registerFailure, saveAllStories} from "./actions";
import RestApi from "../../services/restclient/RestApi";
import {toast} from "../../Omni";
import * as globals from "../../../globals";
import {closeDialog, openDialog, startPointClaim, stopPointClaim} from "../app/actions";
import * as axios from "axios";
import moment from "moment";
import {EventRegister} from 'react-native-event-listeners'
import Constants from "../../common/Constants";


export const login = (data) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().post('users/auth/login', data)
            .then((json) => {
                dispatch(actions.loginFailure(""));
                return json.data;
            })
            .catch((err) => {
                apiError(err)
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};
export const register = (data) => (dispatch) => {
    try {
        const {name, phoneNumber, email, password, iso, fcmToken, refer_user_id, countryCode, deviceInfo} = data;
        let params = {
            "api_key": globals.API_KEY,
            'email': email,
            'name': name,
            'password': password,
            'phone_number': phoneNumber,
            'provider_uid': "",
            iso,
            'platform': Platform.OS,
            'device_token': fcmToken,
            'refer_user_id': refer_user_id,
            'provider': 'custom',
            'otp_type': "short",
            "country_code": countryCode,
            device_info: deviceInfo
        };

        dispatch(actions.registerPending());
        return RestApi.getInstanceV2().post('users/auth/register', params)
            .then((json) => {
                dispatch(registerFailure(""))
                return json.data;
            }).catch(err => {
                apiError(err)
                dispatch(registerFailure(""))
                return undefined;
            })
    } catch (e) {
        apiError(e)
        dispatch(registerFailure(""))
        return undefined;

    }
}


export const verifyOtp = (data) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().post('users/auth/verifyOTP', data)
            .then((json) => {

                return json.data;
            })
            .catch((err) => {
                apiError(err)

                dispatch(actions.loginFailure(err));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};



export const editProfile = (data, userInfo) => (dispatch) => {
    try {
        return RestApi.getInstanceV2().put('users/profile/update', JSON.stringify(data))
            .then((json) => {
                dispatch(actions.loginFailure(""));
                if (json.data) {
                    const {data} = json;
                    userInfo.name = data.firstname;
                    userInfo.email = data.email;
                    userInfo.userCity = data.userCity;
                    userInfo.user.name = data.firstname;
                    userInfo.user.email = data.email;
                    userInfo.user.dob = data.dob;
                    userInfo.user.gender = data.gender;
                    userInfo.user.userCity = data.userCity;
                    dispatch(loginSuccess(userInfo))
                    toast('Profile Updated Successfully')
                }
                return json.data;
            })
            .catch((err) => {
                apiError(err)
                return undefined;
            });
    } catch (error) {
        return undefined;
    }
};

export const logout = () => (dispatch) => {
    dispatch(actions.logoutUser());
};


function errorLog(error) {
    console.log(error)
}

const apiError = (response) => {
    if (response?.response?.status == 422) {
        var errorString = '';
        for (let obj of Object.keys(response.response.data)) {
            errorString += response.response.data[obj]
        }
        toast(errorString, 3000);
    } else if (response?.response?.status == 401) {
        toast('Authentication failed');
    } else {
        if (response?.response?.data && typeof response?.response?.data === 'string') {
            toast(response?.response?.data);
        } else {
            if (response.response.status === 500) {
                toast("Internal Server Error");
            } else {
                toast("Something went wrong, please try later");

            }
        }
    }
}



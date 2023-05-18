import * as actions from "./actions";
import {clearData, loginSuccess, registerFailure} from "./actions";
import RestApi from "../../services/restclient/RestApi";
import {toast} from "../../Omni";
import axios from "axios";


export const login = (data) => (dispatch) => {

    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().post('/login', data)
            .then((json) => {
                data = json.data
                if (data.HasError == false) {
                    const userData = data?.Result?.Item
                    dispatch(actions.loginSuccess(userData))
                    return data;
                } else {
                    toast(JSON.stringify(data.ResultMessage[0].Message))
                    return undefined;
                }
            })
            .catch((err) => {
                toast(JSON.stringify(err))
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};

export const forgetPassword = (data) => (dispatch) => {

    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().patch('/forgetpassword', data)
            .then((json) => {
                data = json.data
                if (data.HasError == false) {
                    return data;
                } else {
                    toast(JSON.stringify(data.ResultMessage[0].Message))
                    return undefined;

                }
            })
            .catch((err) => {
                toast(JSON.stringify(err))
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};

export const verifyOtp = (data) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().post('/verifyotp', data)
            .then((json) => {
                data = json.data
                if (data.HasError == false) {
                    return data;
                } else {
                    toast(JSON.stringify(data.ResultMessage[0].Message))
                    return undefined;
                }
            })
            .catch((err) => {
                toast(JSON.stringify(err))
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};


export const updateUser = (data) => (dispatch) => {

    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().patch('/updateuserdata', data)
            .then((json) => {
                data = json.data
                if (data.HasError == false) {
                    toast(data.ResultMessage[0].Message)
                    return data;
                } else {
                    toast(data.ResultMessage[0].Message)
                    return undefined;
                }
            })
            .catch((err) => {
                toast(JSON.stringify(err))
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};


export const getUserLeaves = (data) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().post('/getuserleave', data)
            .then((json) => {
                data = json.data?.Result
                dispatch(actions.getLeaves(data))
                return data;
            })
            .catch((err) => {
                toast(err)
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};


export const getComplains = (data) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().post('/getcomplains', data)
            .then((json) => {
                data = json.data.Result
                return data;
            })
            .catch((err) => {
                toast(JSON.stringify(err))
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};
export const getAllEmployees = (data) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().get('/getallusers')
            .then((json) => {
                data = json.data
                if (data.HasError == false) {
                    return data.Result;
                } else {
                    toast(JSON.stringify(data.ResultMessage[0].Message))
                    return undefined;
                }
            })
            .catch((err) => {
                toast(JSON.stringify(err))
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};


export const getEmployComplains = (data) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().post('/getusercomplains', data)
            .then((json) => {
                data = json.data.Result
                return data;
            })
            .catch((err) => {
                toast(JSON.stringify(err))
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};

export const AcceptComplain = (data) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().patch('/updatecomplain', data)
            .then((json) => {
                data = json.data

                if(data.HasError){
                 toast("Something Went Wrong Please Try again")
                }else {
                    toast(JSON.stringify(data.ResultMessage[0].Message))
                    return data;
                }

            })
            .catch((err) => {
                toast(JSON.stringify(err))
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};
export const RejectComplain = (data) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().patch('/updatecomplain', data)
            .then((json) => {
                data = json.data

                if(data.HasError){
                    toast("Something Went Wrong Please Try again")
                }else {
                    toast(JSON.stringify(data.ResultMessage[0].Message))
                    return data;
                }

            })
            .catch((err) => {
                toast(JSON.stringify(err))
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};
export const PostComplain = (data) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().post('/registercomplain', data)
            .then((json) => {
                data = json.data
                return data;
            })
            .catch((err) => {
                toast(err)
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};




export const updatePassword = (data) => (dispatch) => {
    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().patch('/updatepassword', data)
            .then((json) => {
                data = json.data
                if (data?.HasError == false) {
                    return data;
                } else {
                    toast(data?.ResultMessage[0].Message)
                    return undefined;
                }
            })
            .catch((err) => {
                toast(err)
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};


export const attendance = (data) => (dispatch) => {

    try {

        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().post('/attendence', data)
            .then((json) => {
                data = json.data

                if (data.HasError == false) {
                    return data;
                    toast(Jdata.ResultMessage[0].Message)
                } else {
                    toast(data.ResultMessage[0].Message)
                    return undefined;
                }
            })
            .catch((err) => {
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};

export const acceptLeave = (data) => (dispatch) => {

    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().patch('/updateleave', data)
            .then((json) => {
                data = json.data

                if (data.HasError == false) {
                    return data;
                } else {
                    toast(JSON.stringify(data.ResultMessage[0].Message))
                    return undefined;
                }
            })
            .catch((err) => {
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};


export const rejectLeave = (data) => (dispatch) => {

    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().patch('/updateleave', data)
            .then((json) => {
                data = json.data

                if (data.HasError == false) {
                    return data;
                } else {
                    toast(JSON.stringify(data.ResultMessage[0].Message))
                    return undefined;
                }
            })
            .catch((err) => {
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};

export const sendleave = (data) => (dispatch) => {

    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().post('/sendleave', data)
            .then((json) => {
                data = json.data
                if (data.HasError == false) {
                    return data;
                } else {
                    toast(JSON.stringify(data.ResultMessage[0].Message))
                    return undefined;
                }
            })
            .catch((err) => {
                // toast(JSON.stringify(err))
                dispatch(actions.loginFailure(""));
                return undefined;
            });
    } catch (error) {
        apiError(error)
        dispatch(actions.loginFailure(error));
        return undefined;
    }
};


export const getLeaves = () => (dispatch) => {
    const   obj={
        Date: ""
    }
    try {
        dispatch(actions.loginPending());
        return RestApi.getInstanceV2().post('/getleave', obj)
            .then((json) => {
                let data = json.data
                if (data.HasError == false) {

                    return data;
                } else {
                    toast(data.ResultMessage[0].Message)
                    return undefined;
                }
            })
            .catch((err) => {
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
            "api_key": "",
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

export const BrakeTimes = (data) => (dispatch) => {
    dispatch(actions.BrakeTimes(data));
};
export const CheckInData = (data) => (dispatch) => {
    dispatch(actions.checkIn(data));
};

export const cleeardata = () => (dispatch) => {
    dispatch(actions.clearData());
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



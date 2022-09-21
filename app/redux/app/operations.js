import * as actions from './actions'
import {CommonActions} from '@react-navigation/native'

import store from './../../store/configureStore'

import {toast} from '../../Omni'
import * as DeviceInfo from 'react-native-device-info'
import RestApi from "../../services/restclient/RestApi";

export const initialApp = () => (dispatch) => {
    dispatch(actions.beginInitApp())
    dispatch(saveDeviceInfo())
}




export const saveDeviceInfo = () => async (dispatch) => {
    try {
        const buildNumber = DeviceInfo.getBuildNumber()
        const brand = DeviceInfo.getBrand()
        const deviceId = DeviceInfo.getDeviceId()
        const readableVersion = DeviceInfo.getReadableVersion()
        const systemVersion = DeviceInfo.getSystemVersion()
        const currentVersion = DeviceInfo.getVersion()
        const apiLevel = await DeviceInfo.getApiLevel()
        const totalMemory = await DeviceInfo.getTotalMemory()
        const buildId = await DeviceInfo.getBuildId()
        const device = await DeviceInfo.getDevice()
        const deviceName = await DeviceInfo.getDeviceName()
        const obj = {
            buildNumber,
            brand,
            deviceId,
            readableVersion,
            systemVersion,
            apiLevel,
            totalMemory,
            buildId,
            device,
            deviceName,
            currentVersion
        }
        dispatch(actions.saveDeviceInfo(JSON.stringify(obj)))
    } catch (e) {

    }
}

export const saveNotification = (notification) => (dispatch) => {
    const state = store.getState()
    const {notificationList} = state.app
    notificationList.push(notification)

    const obj = {
        notification: notificationList,
        msgCount: state.app.msgCount + 1
    }
    dispatch(actions.savePushNotification(obj))
}

export const resetNotification = () => (dispatch) => {
    const state = store.getState()
    const {notificationList} = state.app
    const notifyArr = []
    for (const notify of notificationList) {
        const notii = {...notify}
        notii.seen = 1
        notifyArr.push(notii)
    }

    const obj = {
        notification: notifyArr,
        msgCount: 0
    }
    dispatch(actions.savePushNotification(obj))
}


export const getProblemList = () => (dispatch) => {

    try {

        return RestApi.getInstanceV2().get('contactUs/getSuggestions',{
          params:globals.API_KEY
        }).then((response) => {
            const {data} = response
            if (data) {
                dispatch(actions.saveProblemList(data))
                return data;
            }
        }).catch(error => {

          console.log(JSON.stringify(error))

        })


    } catch (e) {

    }


}

export const sendEmailAPI = (params) => (dispatch) => {


    let form = new FormData();
    for (let key in params) {
        form.append(key, params[key]);
    }
    try {
        console.log(form)
        return RestApi.getInstanceV2().post('contactUs/sendMail',form).then((response) => {
            const {data} = response
            // toast(data)
            return data
        }).catch(err => {

            if (err?.response?.status === 422) {
                let errorString = ''
                for (const obj of Object.keys(err.response.data)) {
                    errorString += err.response.data[obj]
                }
                toast(errorString, 3000)
            } else if (err?.response?.status === 409 || err?.response?.status === 404) {
                toast(err.response.data)
            } else {
                toast('Something went wrong, please try later')
            }

        })


    } catch (e) {

    }


}

export const countPN = () => (dispatch) => {
    const state = store.getState()
    dispatch(actions.savePNCount(state.app.msgCount + 1))
}
export const resetPNCount = () => (dispatch) => {
    dispatch(actions.savePNCount(0))
}

export const finishIntro = (dispatch) => {
    dispatch(actions.finishIntro())
    dispatch(CommonActions.navigate({
        name: 'home'
    }))
}

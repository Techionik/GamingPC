import {persistCombineReducers, persistReducer} from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'

import app from './app'
import user from './user'

const config = {
    key: 'root',
    storage,
    blacklist: [
        'app',
        'user',
    ]
}

const appPersistConfig = {
    key: 'app',
    storage,
    blacklist: ['isOpenSidemenu', 'dialogObj', 'isPointsClaim', 'toast']
}

const userPersistConfig = {
    key: 'user',
    storage,
    blacklist: ['isFetching', 'error', 'isSocialLogin']
}



export default persistCombineReducers(config, {
    app: persistReducer(appPersistConfig, app),
    user: persistReducer(userPersistConfig, user),

})

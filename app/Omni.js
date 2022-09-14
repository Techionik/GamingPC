
import { Constants } from "./common"
import { EventRegister } from 'react-native-event-listeners'
// TODO: replace those function after app go live
// export const log = (values) => __DEV__ && reactotron.log(values);
// export const warn = (values) => __DEV__ && reactotron.warn(values);
// export const error = (values) => __DEV__ && reactotron.error(values);

export const toast = (msg, duration = 4000) =>
  EventRegister.emit(Constants.EmitCode.Toast, msg, duration)


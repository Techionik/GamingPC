
import { Constants } from "./common"
import { EventRegister } from 'react-native-event-listeners'
// TODO: replace those function after app go live
import _Icon from "react-native-vector-icons/MaterialCommunityIcons";
import _IconIO from "react-native-vector-icons/Ionicons";
import _Timer from "react-timer-mixin";
// import _Validate from "./ultils/Validate";
// import _BlockTimer from "./ultils/BlockTimer";

export const Icon = _Icon;
export const IconIO = _IconIO;
// export const EventEmitter = EventRegister;
export const Timer = _Timer;

// export const log = (values) => __DEV__ && reactotron.log(values);
// export const warn = (values) => __DEV__ && reactotron.warn(values);
// export const error = (values) => __DEV__ && reactotron.error(values);

export const toast = (msg, duration = 4000) =>
  EventRegister.emit(Constants.EmitCode.Toast, msg, duration)


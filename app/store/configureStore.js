import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../redux/index";

const middleware = [
  thunk,
];

const configureStore = () => {
  let store = null;
  if (__DEV__) {
    import('./../../ReactotronConfig').then(() =>
        console.log('Reactotron Configured'),
    );
  }
  store = compose(applyMiddleware(...middleware))(createStore)(reducers);
  return store;
};

export default configureStore();

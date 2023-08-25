import Navigation from "./navigation.js";
import { Provider } from "react-redux";
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(); //Ignore all log notifications

import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

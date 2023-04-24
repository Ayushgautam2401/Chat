import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import createStore from "./store";

import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "./styles/index.scss";
import reportWebVitals from "./reportWebVitals";

const store = createStore({});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

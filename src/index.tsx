import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";
import Global from "./styles/global";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { BrowserRouter, HashRouter } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={baseTheme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Global />
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

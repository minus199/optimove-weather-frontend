/*import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import { ThemeProvider } from '@material-ui/styles';
import App from "./components/App";

import store from "./store/store";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    body1: { fontSize: "2rem" }
  },
});

// // Listen for changes to the current location.
// const unlisten = history.listen((location, action) => {
//   //Do your logic here and dispatch if needed
//   console.log("R", location, action)
// })

const About = () => (<div>x</div>)

ReactDOM.render(
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Route component={App} />
        <Route path="/about/" component={About} />
      </Router>
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById("root")
);*/
import React from 'react'
import { render } from 'react-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import App from './components/App'
// import rootReducer from './store/reducers'
// import { State } from './store/types';

// export const INITIAL_STATE: State = {
//   user: {
//     topCities: [],
//     username: null
//   },
//   lastUpdated: new Date(),

//   cities: {},
//   searchHistory: {},
//   suggestions: {
//     searchTerm: "",
//     suggestions: {}
//   }
// };

// const store = createStore(rootReducer, INITIAL_STATE as any, applyMiddleware(thunkMiddleware))

render(
  // <Provider store={store}>
  <App />
  // </Provider>,
  ,
  document.getElementById('root')
)

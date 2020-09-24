import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./components/main/Main";
import NavigationBar from "./components/navbar/NavigationBar";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from './store/reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

function App() {
    return (
        <Provider store={store}>
            <Router>
                <NavigationBar/>
                <Main/>
            </Router>
        </Provider>
    );
}

export default App

import { createStore, combineReducers, applyMiddleware } from 'redux'
import {createBrowserHistory} from 'history';

import appReducer from './reducers/appReducer'
import {routerMiddleware, connectRouter} from "connected-react-router";

import createSagaMiddleware from 'redux-saga';

import {appSaga} from './sagas/appSaga';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

const middleware = [sagaMiddleware, routerMiddleware(history)]

const reducers = combineReducers({
    router: connectRouter(history),
    //sagaMiddleware: sagaMiddleware,
    appReducer: appReducer,
})

const store = applyMiddleware(...middleware)(createStore)(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

sagaMiddleware.run(appSaga)

export { store, history }

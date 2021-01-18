import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import {ConnectedRouter} from 'connected-react-router';
import {Route, Switch} from 'react-router-dom';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { store, history } from './store/store'

ReactDOM.render(
    <Provider store={store}>

        <ConnectedRouter history={history}>

            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="*" render={() => (<h1>PAGE NOT FOUND</h1>)}/>
            </Switch>


           {/* <App />*/}
        </ConnectedRouter>


    </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

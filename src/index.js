import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



//引入热加载
// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import App from './components/App'
// import configureStore from './configureStore'
//
// const store = configureStore()
//
// const renderApp = () =>
//     render(
//         <Provider store={store}>
//             <App />
//         </Provider>,
//         document.getElementById('root')
//     )
//
// if (process.env.NODE_ENV !== 'production' && module.hot) {
//     module.hot.accept('./components/App', renderApp)
// }
//
// renderApp()

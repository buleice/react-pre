//未引入chrome插件
// import { applyMiddleware, compose, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'
//
// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
// import rootReducer from './reducers'
//
// export default function configureStore(preloadedState) {
//     const middlewares = [loggerMiddleware, thunkMiddleware]
//     const middlewareEnhancer = applyMiddleware(...middlewares)
//
//     const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//     const composedEnhancers = compose(...enhancers)
//
//     const store = createStore(rootReducer, preloadedState, composedEnhancers)
//
//     return store
// }

//引入chrome插件
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    return store
}

//引入热加载
// import { applyMiddleware, compose, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'
//
// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
// import rootReducer from './reducers'
//
// export default function configureStore(preloadedState) {
//     const middlewares = [loggerMiddleware, thunkMiddleware]
//     const middlewareEnhancer = applyMiddleware(...middlewares)
//
//     const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//     const composedEnhancers = compose(...enhancers)
//
//     const store = createStore(rootReducer, preloadedState, composedEnhancers)
//
//     if (process.env.NODE_ENV !== 'production' && module.hot) {
//         module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
//     }
//
//     return store
// }

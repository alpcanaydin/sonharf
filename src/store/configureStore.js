import rootReducer from '../reducers';
import {createStore, applyMiddleware, compose} from 'redux';

export default (initialState) => {
  const middlewares = [];

  const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
      compose
  ;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );

  const store = createStore(rootReducer, initialState, enhancer);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
};

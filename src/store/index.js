import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import reducer from '../reducers';

// const navigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);

export default createStore(
    reducer,
    applyMiddleware(thunk)
);

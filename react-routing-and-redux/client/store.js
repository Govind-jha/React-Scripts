import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import posts from './data/posts';
import comments from './data/comments'
import rootReducer from './reducers/rootReducer'

// reducers and store data name should be same, based on the name
// redux reduces the scope of global store data to only the relevent
// data needed by reducers, which goes by the same name.

// var defaultStore = {posts:posts, comments:comments}
var defaultStore = {posts:[], comments};

var store = createStore(rootReducer,defaultStore, applyMiddleware(thunk));

export default store;
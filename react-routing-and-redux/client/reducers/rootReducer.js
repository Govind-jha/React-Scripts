import PostsReducer from './postReducer';
import CommentsReducer from './commentReducer';

import { combineReducers } from 'redux';

var rootReducer = combineReducers({ posts: PostsReducer, comments: CommentsReducer });

export default rootReducer;
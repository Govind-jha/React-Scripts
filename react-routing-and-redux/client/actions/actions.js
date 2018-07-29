import axios from 'axios';

// Action creators !! 
// Defining the type of actions
export function IncrementLikes(index) {
    return { type: 'INCREMENT_LIKES', index }
}

// Action creator
export function DecrementLikes() {
    return { type: 'DECREMENT_LIKES' }
}

// Action creator
export function AddComment() {
    return { type: 'ADD_COMMENT' }
}

// Thunk takes a function in return
export function fetchPostsData() {
    var request = axios.get('https://api.myjson.com/bins/14enzu');
    
    return (dispatch) => {
        request.then(
            (response) => {
                dispatch({ type: 'FETCH_POSTS', response: response.data });
            }
        ).catch(
            (err) => {
                console.err(err)
            }
        )
    };
}
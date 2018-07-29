// initialize default Store to empty array.
export default function posts(defStore = [], action) {

    switch (action.type) {
        case 'FETCH_POSTS':
            defStore = action.response; // Initializing Store data
            return defStore;

        case 'INCREMENT_LIKES':
            let index = action.index;

            return [
                ...defStore.slice(0, index),
                { ...defStore[index], likes: defStore[index].likes + 1 },
                ...defStore.slice(index + 1)
            ]; // return an updated store!

        case 'DECREMENT_LIKES':
            console.log("Action: DECREMENT_LIKES !");
            return defStore; // return an updated store!    

        default:
            return defStore;
    }
}
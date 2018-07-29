// initialize default Store to empty array.
export default function comments(defStore=[], action){

    switch(action.type){
        case 'ADD_COMMENT':
            console.log("Action: ADD_COMMENT !");
            return defStore;
        
        default:
            return defStore;
    }
}
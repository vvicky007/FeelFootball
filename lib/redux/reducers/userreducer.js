export default function userReducer(state=[],action){
    
    switch(action.type){
        case "USER_SIGNED_IN":
            return {...state,username:action.username}
        default:
            return state;
    }

}6
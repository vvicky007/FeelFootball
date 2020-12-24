export default function leagueReducer(state=[],action){
    
    switch(action.type){
        case "LEAGUE":
            return {...state}
        default:
            return state;
    }

}6
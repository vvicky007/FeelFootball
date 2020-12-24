import leagueReducer from './leaguereducer'

const rootReducer = (state,action)=>{
    return {
        league:leagueReducer(state,action)
    }
}
export default rootReducer;
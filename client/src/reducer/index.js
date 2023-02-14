const initialState = {
    Countries: [],
    allCountries:[],
    Activities:[],
    allActivities:[],
    Detail:[]
}

export default function rootReducer(state= initialState, action){
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                Countries: action.payload,
                allCountries: action.payload
            }

            
        case 'GET_ACTIVITIES':
            return{
                ...state,
                Activities:action.payload
            } 


        case 'GET_COUNTRY_NAME':
            return{
                ...state,
                Countries: action.payload
            }
            
            
        case 'GET_COUNTRY_ID':
            return{
                ...state,
                Detail: action.payload
            }    

        case 'POST_ACTIVITY':
            return{
                ...state
            }    

            

        case 'COUNTRY_BY_TYPE':
            const allCountries = state.allCountries
            const countriesFiltered = action.payload === 'all' ? allCountries : allCountries.filter(item => item.continent === action.payload)
            return{
                ...state,
                Countries: countriesFiltered
            }




        case 'ACTIVITY_BY_NAME':
            return{
                ...state,
                Countries: action.payload
            } 
            


            
        case 'ACTIVITY_BY_ORDER':

            const sortArray = action.payload === 'Asc' ?
            state.Countries.sort(function(a,b) {
                if(a.name > b.name) {
                    return 1
                }
                if(b.name > a.name) {
                    return -1
                }
                return 0
            } ) :
            state.Countries.sort(function(a,b) {
                if(a.name > b.name) {
                    return -1
                }
                if(b.name > a.name) {
                    return 1
                }
                return 0
            })
            
            return{
                ...state,
                Countries:sortArray
            }

            
        case 'FILTER_BY_POPULATION':
                const sortPopulation = action.payload === 'Asc' ?
                state.Countries.sort((a,b) => a.population - b.population) :
                state.Countries.sort((a,b) => b.population - a.population)

                return{
                    ...state,
                    Countries: sortPopulation
                }

        // case 'FILTER_BY_POPULATION':
        //         const allCountries1 = state.allCountries
        //         const countriesFiltered1 = action.payload === 'all' ? allCountries1 : allCountries1.filter(item => item.population > 50000000)
              
        //             return{
        //                 ...state,
        //                 Countries: countriesFiltered1
        //             }
        
        case 'FILTER_BY_AREA':
                const sortArea = action.payload === 'Asc' ?
                state.Countries.sort((a,b) => a.area - b.area) :
                state.Countries.sort((a,b) => b.area - a.area)

                return{
                    ...state,
                    Countries: sortArea
                }
                                    

                            
        case 'FILTER_BY_ACTIVITY':
            const allCountries2 = state.allCountries
            const countriesFiltered2 = action.payload === 'all' ? allCountries2 : allCountries2.filter(item => item.activities.includes(action.payload))
            return{
                ...state,
                Countries: countriesFiltered2
            }

            // borramos el pais por el id
        case 'DELETE_COUNTRY':
            return{
                ...state,
                Countries: state.Countries.filter(item => item.id !== action.payload)
            }
            
       





        default:
            return state
    }
}
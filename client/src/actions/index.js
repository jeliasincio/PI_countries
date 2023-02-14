import axios from "axios"

export function getCountries(){
    return async function(dispatch){
        const TodaLaData = await axios.get("/countries")
        return dispatch({type:'GET_COUNTRIES', payload: TodaLaData.data})
    }
}

export function getActivities(){
    return async function(dispatch){
        const TodasLasActivities = await axios.get("/activities")
        return dispatch({type:'GET_ACTIVITIES', payload: TodasLasActivities.data})
    }
}

export function postActivity (activity) {
    return async function(dispatch){
       const resolve = await axios.post('/activities',activity)
       return resolve
    }
}

export function filteredCountryByType(typeOfCountry){
    return{
        type:'COUNTRY_BY_TYPE',
        payload: typeOfCountry
    }
}

export function filterActivity (name){
    return async function(dispatch){
        const json = await axios.get(`/activities?name=${name}`)
        return dispatch({type: 'ACTIVITY_BY_NAME', payload: json.data})
    }
}

export function filterByOrder(order){
    return{
        type:'ACTIVITY_BY_ORDER',
        payload: order
    }
}

export function filterByArea(order){
    return{
        type:'FILTER_BY_AREA',
        payload: order
    }
}

export function filterByPopulation (order){
    return{
        type:'FILTER_BY_POPULATION',
        payload: order
    }
}



export function getCountryByName (name){
    return async function(dispatch){
        // try {

            const pais = await axios.get(`/countries?name=${name}`)
            return dispatch({type: 'GET_COUNTRY_NAME', payload: pais.data})  

        // } catch (error) {
        //    console.log(error) 
        // }
        
    }
}

export function  getCountryId(id) {
    return async function(dispatch){
        const infoPais = await axios.get(`/countries/${id}`)
        return dispatch({ type: 'GET_COUNTRY_ID', payload: infoPais.data})
    }
}

export function deleteCountry(id){
    return async function(dispatch){
        const deletePais = await axios.delete(`/countries/${id}`)
        return dispatch({type: 'DELETE_COUNTRY', payload: deletePais.data})
    }
}
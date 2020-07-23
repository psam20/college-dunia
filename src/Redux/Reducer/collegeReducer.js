import {Constants as c} from '../constants';

const INITIAL_STATE={
    colleges:[],
    loading:false,
    hasErrors:false,
}

const CollegeReducer = (state=INITIAL_STATE,action)=>{

    switch( action.type){

        case c.FETCH_BEGIN : 
        return  {
            ...state,
            loading:true,
        }

        case c.FETCH_SUCCESS :
            return {
                colleges:action.payload,
                loading:false,
                hasErrors:false,
            }
        case c.FETCH_FAILURE:
            return {
                ...state,
                hasErrors:true,
            } 
        default :
        return state       

    }
}
export default CollegeReducer;
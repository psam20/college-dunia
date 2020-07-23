import {Constants as c} from '../constants';
export const fetchBegin = ()=> ({
    type: c.FETCH_BEGIN
});

export const fetchSuccess =  (data) => ({
    type:c.FETCH_SUCCESS,
    payload:data,
})

export const fetchFailure =( error) => ({
    type:c.FETCH_FAILURE,
    payload:error,
})

// This is a Combined fetchCollege Actions for Begin , success and Failure
export const fetchColleges= ()=>{
    return async dispatch=>{
              dispatch(fetchBegin());

              try{
                      const respose= await fetch('http://localhost:3010/colleges')
                      const data = await respose.json();
                      dispatch(fetchSuccess(data))
                      console.log(data);
              }
              catch(err){
                   console.log(err)
                   dispatch(fetchFailure());
              };
              
    }
}
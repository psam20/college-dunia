import React,{useEffect,useState} from 'react';

import {connect} from 'react-redux';
import {fetchColleges,fetchBegin} from '../Redux/actions/collegeAction';
import App from '../App';
function AppContainer({fetchCollege,colleges,fetchBegin,loading}) {
  
 
 

  useEffect(() => {
  
    fetchCollege();
  }, [fetchCollege]);

 

   
  return (
    <div className="AppContainer">
       <App  colleges={colleges}/>
       
    </div>
  );
}
const MapStateToProps = (state)=>({
    colleges:state.college.colleges,
    loading:state.college.loading,
})
const MapDispatchToProps = (dispatch)=>({
    fetchCollege : ()=>dispatch(fetchColleges()),
    fetchBegin:()=>dispatch(fetchBegin())
})

export default connect(MapStateToProps,MapDispatchToProps) (AppContainer);

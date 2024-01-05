import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const objectinia={
    allcontact:[],
    singlecontact:{},
    age:25
}

const ALLCONTACT="ALLCONTACT";
const SINGLECONTACT="SINGLECONTACT";
const contactSlicer=(state=objectinia,action)=>{

    switch(action.type){
     case 'ALLCONTACT':
      return {
        ...state,
        allcontact:action.payload
      } 
      case 'SINGLECONTACT':
        return{
            ...state,
            singlecontact:action.payload
        }   
      
      
    }

    return state;
}
// export default contactSlicer;
export default contactSlicer;
export const insert=(api,formvalue)=>{
    return function(){
        axios.post(api,formvalue)
        .then((resp)=> console.log(resp));
    }
}
export const deletedata=(api)=>{
    return function(){
        axios.delete(api)
        .then((resp)=> console.log(resp));
    }
}
export const update=(api,formvalue)=>{
    return function(){
        axios.patch(api,formvalue)
        .then((resp)=> console.log(resp));
    }
}
const setsinglecontact=(data)=>({type:SINGLECONTACT,payload:data});
export const singlefetch=(api)=>{
    return function(dispatch){
        axios.get(api)
        .then((obj)=> 
            dispatch(setsinglecontact(obj.data))
        );
    }
}
// export const { }=contactSlicer.actions;


    const setcontact=(data)=>({type:ALLCONTACT,payload:data});
    export const selectcontact=(api)=>{
        return function (dispatch) {
            axios.get(api)
            .then((res)=>{
                dispatch(setcontact(res.data));
            })
        }
    }





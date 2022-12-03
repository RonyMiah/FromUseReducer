import { actionType } from "./actionType";

export   const initialState ={
    firstName : "",
    lastName :"",
    email :"",
    gender:"",
    education:"",
    quantity: 0,
    feedback: "",
    term: false
};
export const reducer = (state, action) =>{
    
    switch(action.type){
        case actionType.INPUT :
            return {
                ...state,
                //scqure braket Notation 
                [action.payload.name]:action.payload.value,
            }
         case actionType.TOGGLE : 
         return{
            ...state ,
            term : !state.term
         }  

         case actionType.INCREMENT : 
         return {
            ...state,
            quantity: state.quantity + action.payload
         }
         

         case actionType.DECREMENT : 
         return {
            ...state,
            quantity: state.quantity - action.payload
         }
            
            
            default : return state ;
    }
  
    
};
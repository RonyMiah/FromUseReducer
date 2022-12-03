import React, { useReducer } from 'react';
import { initialState, reducer } from '../state/fromReducer';

const From = () => {

const [state , dispatch] = useReducer(reducer, initialState);


const submit =(event) => {
    event.preventDefault();
    console.log(state)
}

    return (
            <>
             <form className='w-50 mx-auto border p-5 shadow-lg  bg-body rounded ' onSubmit={submit}>
                <div class="form-group p-2 mb-1 w-50 d-inline-block">
                    <label for="firstName"><b>Frist Name</b></label>
                    <input name="firstName" type="text" class="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter Frist Name"  onBlur={(e)=>dispatch({type:"INPUT", payload:{name:e.target.name , value:e.target.value }})}/>
                </div>

                <div class="form-group p-2 mb-1 w-50 d-inline-block">
                    <label for="lastName"><b>Last Name</b></label>
                    <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Enter Frist Name" onBlur={(e)=>dispatch({type:"INPUT", payload:{name:e.target.name , value:e.target.value }})}/>
                </div>

                <div class="form-group p-2 mb-1 w-50 d-inline-block">
                    <label for="email"><b>Email</b></label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="Email" onBlur={(e)=>dispatch({type:"INPUT", payload:{name:e.target.name , value:e.target.value }})}/>
                </div>
          
                <div class="form-group p-2 mb-1 w-50 d-inline-block">
                    <label   className='p-1 mb-1'><b>Gender</b></label>
                    <br/>
            
                    <input  type="radio" class="ms-2 " name="gender"  id="femail" placeholder="Gender" value='femail' onClick={(e)=>dispatch({type:"INPUT", payload:{name:e.target.name , value:e.target.value }})}/>
                    <label  for="femail" className='p-2 mb-1'>Femail</label>

                    <input   type="radio" class="ms-2" name="gender"  id="mail" placeholder="Gender" value="mail" onClick={(e)=>dispatch({type:"INPUT", payload:{name:e.target.name , value:e.target.value }})}/>
                    <label  for="mail" className='p-2 mb-1'>Mail</label>

                    <input  type="radio" class="ms-2 " name="gender"  id="other" placeholder="Others" value="other" onClick={(e)=>dispatch({type:"INPUT", payload:{name:e.target.name , value:e.target.value }})}/>
                    <label  for="other" className='p-2 mb-1'>Other's</label>
                    
                </div>
                <div  className='form-group p-2 rounded mb-1 w-50 d-inline-block'>
                <label for="education"><b>Education</b></label>
                <select class="form-select" aria-label="Default select example"  name="education"   onChange={(e)=>dispatch({type:"INPUT", payload:{name:e.target.name , value:e.target.value }})} >
                     <option value="SSC">SSC</option>
                    <option value="HSC">SHC</option>
                    <option value="DIPLOMA">DIPLOMA</option>
                    <option value="BSC">BSC</option>
                    </select>
                {/* <select  style={{width: '100%'}} className="p-2 rounded form-select" id="education " name="education" value="education" onChange={(e)=>dispatch({type:"INPUT", payload:{name:e.target.name , value:e.target.value }})}>
                    <option value="SSC">SSC</option>
                    <option value="HSC">SHC</option>
                    <option value="DIPLOMA">DIPLOMA</option>
                    <option value="BSC">BSC</option>
                </select> */}
                </div>
                <div  className='form-group p-2 rounded mb-1 w-50 d-inline-block'>
                <label for="exampleInputPassword1"><b>Number of pices </b></label>
                <br/>
                <button className='btn btn-primary ' style={{padding: '2% 4%', marginRight: '5px'}} onClick={()=>dispatch({type:"DECREMENT" , payload:1})}>-</button>
                <div className='d-inline-block   mx-auto text-center border border-2 rounded  ' style={{width: '65%', padding:'3px', }}>
                    <span className='bold'> {state.quantity} </span>
                </div>
                <button className='btn btn-primary me-2' style={{padding: '2% 4%' , marginLeft:'5px'}}  onClick={()=>dispatch({type:"INCREMENT" , payload:1})}>+</button>
                
                </div>

                <div class="form-group p-2  w-50 d-inline-block">
                    <label for="feedback"><b>Feedback</b></label>
                    <textarea name='feedback' class="form-control" id="exampleInputPassword1" placeholder="Give Me Your Feedback" onBlur={(e)=>dispatch({type:"INPUT", payload:{name:e.target.name , value:e.target.value }})}/>
                </div>

                <div class="form-group form-check  mb-3 ">
                    
                    <input type="checkbox" name="term" class="form-check-input  " id="term"  
                    onClick={()=>dispatch({type:"TOGGLE"})}/>
                    <label class="form-check-label" for="term">Agree Trams and Conditon </label>
                </div>
                <button  disabled ={!state.term} type="submit" class="btn btn-primary p-2 mb-1 float-end">Submit</button>
            </form>
    </>
    );
};

export default From;
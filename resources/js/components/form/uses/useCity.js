import React,{ useState } from 'react';

const useCity = (fun)=>{
    const [stateName , setStateName] = useState(null);
    const getCity=(stateVal)=>{
        setStateName(stateVal)
        fun(perv=>({...perv , city:null}))
    }
    return [stateName , getCity]
}

export default useCity;
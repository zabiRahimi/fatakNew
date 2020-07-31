import React from 'react';
import {useLocation  } from "react-router-dom";

const EndAddOrder = ()=>{
    let location = useLocation();
    return(
        <div className='endAddOrderContiner'>
            <div>
                سفارش شما با موفقیت ثبت شد
            </div>
            <div>
                edit
            </div>
        </div>
    )
}
export default EndAddOrder;
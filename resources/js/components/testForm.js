import React ,{ useState } from 'react';
import $ from "jquery";
import ErrorAll from './form/errorAll';

import Input from './form/input';
import Textarea from './form/textarea';
import Select from './form/select';
import State from './form/state';
import City from './form/city';
import Submit from './form/submit';
import CheckContiner from './form/checkContiner';
import Radio from './form/radio';
import Checkbox from './form/checkbox';
import Captcha from './form/captch';
import Title from './form/title';
import Point from './form/point';



const useCity=()=>{
    const [stateName , setStateName] = useState(null);
    const getCity=(stateVal)=>{
        setStateName(stateVal)
        
    }
    return [stateName , getCity]
}
const TestForm=(props) =>{
       const [stateName , getCity]=useCity();
        const testForm ={
            width:'100%',
            display:'flex',
            backgroundColor: '#eaf0f6',
            justifyContent:'center',
        }
        const handleValue=(e)=>{
           
        }
        const handleSubmit=(e)=>{
           e.preventDefault();
           $('.errorAllAjax').html(
               `<div class='alert alert-danger errorAll' >خطایی رخ داده است ، لطفا دوباره تلاش کنید .</div> `
           )
          
        }
        const option={
         منزل:'منزل',
         خوردنی : 'خوردنی',
         پوشاک:'پوشاک',
        خودرو :'خودرو',
         صنعت:'صنعت',
        کامپیوتر :'کامپیوتر',
        }
       
        
        return (
            
            <div style={testForm}>
                <form className='form' onSubmit={handleSubmit}>
                    <Title title='ثبت سفارش' />
                    <Point point='پر کردن فیلدهای ستاره دار الزامی است .' />
                    <ErrorAll />
                    <Input label='نام محصول' star='ok' id='nameOrder' />
                    <Textarea label='شرح محصول' id='disOrder' />
                    <Select label='دسته محصول' id='squad' option={option} handleValue={handleValue}/>
                    <State star='ok' getCity={getCity} />
                    <City stateName={stateName} />
                    <CheckContiner label='جنسیت' classFeedback='radio'
                     check={
                     [
                        <Radio label='زن' classFeedback='radio' name='gender' id='male' key='1'/> ,
                        <Radio label='مرد' classFeedback='radio' name='gender' id='female' key='2' />
                     ] } />
                    <CheckContiner label='شرایط را قبول دارم' classFeedback='checkbox'
                    check={<Checkbox classFeedback='checkbox' />}
                    />
                    <Captcha  />
                    <Submit class='btn-success btn-block' value='ارسال' />

                    
                    
                </form>
                
                
            </div>
        )
  

}
export default TestForm;
import React,{ useState , useRef } from 'react';
import { withRouter } from "react-router-dom";
import $ from "jquery";
import Swal from 'sweetalert2';
import State from '../form/state';
import City from '../form/city';
import Title from '../form/title';
import Point from '../form/point';
import ErrorAll from '../form/errorAll';
import Input from '../form/input';
import Select from '../form/select';
import Textarea from '../form/textarea';
import Captcha from '../form/captch';
import Submit from '../form/submit';
import useCity from '../form/uses/useCity';
const AddOrder =(props)=> {
    const changeCaptcha=useRef();
    const [element , setElement]=useState({
            nameOrder: null,
            squad: null,
            moduleOrder: null,
            numOrder: null,
            dis: null,
            mobeil: null,
            state: null,
            city: null,
    })
    const handleValue = e => {
        let { id , value } = e.target;
        const check = /^[0-9]{10}$/;
        if (id == 'mobeil' && check.test(value)) {
            value = 0 + value;
        }
        setElement(prev =>({...prev , [id]: value }))
        // // because in this fun to send only element , also geting errors for of this dont use fun then
        axios.post('/order', { [id]: value }, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } })
            .catch((error) => {
                const checkError = error.response.data.errors[id]
                if (checkError) {
                    setElement(prevState =>({...prevState , [id]: null }))
                    $('#' + id).css("border-color", "red")
                    $('.' + id + 'Feedback').html(checkError)
                }
                else {
                    $('#' + id).css("border-color", "green");
                }
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { ...element, captcha: $('#captcha').val() }
        axios.post('/order', data, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } })
            .then(response => {
                props.history.replace('/endAddOrder', response.data.order)
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'سفارش شما با موفقیت ثبت شد',
                    showConfirmButton: false,
                    timer: 3000
                })
            })
            .catch(error => {
                $('#captcha').val('')
                $('.captchaFeedback').html('')
                changeCaptcha.current.refreshCaptcha()
                if (error.response.status == 422) {
                    const errorData = error.response.data.errors;
                    const firstError = Object.keys(errorData)[0];
                    const offset =  $("#" + firstError).offset();
                    $(document).scrollTop(offset.top - 80)
                    for (let i in errorData) {
                        $('#' + i).css("border-color", "red")
                        $('.' + i + 'Feedback').html(errorData[i])
                    }
                }
                else {
                    const offset = $(".errorAll").offset();
                    $(document).scrollTop(offset.top - 80)
                    $('#formAddOrder').trigger('reset');
                    for (let i in element) {
                        setElement(perv=>({...perv , [i]: null }))
                        $('#' + i).css("border-color", "#e3e9ef")
                    }
                    $('.errorAll').html(
                        `<div class='alert alert-danger errorAll' >خطایی رخ داده است ، لطفا دوباره تلاش کنید .</div> `
                    )
                }
            })
    }
    const [stateName , getCity]=useCity(setElement);
        return (
            <div className="orderContiner" id='orderContiner'>
                {/* note : css code form in form.scss   */}
                <form className='form' id='formAddOrder' onSubmit={handleSubmit}>
                    <Title title='ثبت سفارش' />
                    <Point point='پر کردن فیلدهای ستاره دار الزامی است .'/>
                    <ErrorAll />
                    <Input label='نام محصول' id='nameOrder' star='ok' blur={handleValue} />
                    <Select label='دسته محصول' id='squad' change={handleValue}
                      option={[
                          <option value="خودرو" key="1">خودرو</option>,
                          <option value="پوشاک" key="2">پوشاک</option>,
                          <option value="کتاب" key="3">کتاب</option>,
                          <option value="شیرینی پزی و آشپزی" key="4">شیرینی پزی و آشپزی</option>,
                          <option value="خوار و بار" key="5">خوار و بار</option>,
                          <option value="کامپیوتر" key="6">کامپیوتر</option>,
                          <option value="سایر" key="7">سایر</option>,
                      ]} 
                    />
                    <Select label='واحد محصول' id='moduleOrder' star='ok' change={handleValue}
                         option={[
                          <option value="عدد" key="1">عدد</option>,
                          <option value="کیلو گرم" key="2">کیلو گرم</option>,
                          <option value="گرم" key="3">گرم</option>,
                          <option value="بسته" key="4">بسته</option>,
                          <option value="گونی" key="5">گونی</option>,
                          <option value="کارتن" key="6">کارتن</option>,
                          <option value="جین" key="7">جین</option>,
                          <option value="سایر" key="8">سایر</option>,

                         ]} 
                    />
                    <Input label='تعداد محصول' id='numOrder' star='ok'blur={handleValue} />
                    <Textarea label='شرحی از محصول' id='dis' blur={handleValue}/>
                    <Input label='نام موبایل' id='mobeil' star='ok' blur={handleValue} />
                    <State star='ok' getCity={getCity} change={handleValue}/>
                    <City star='ok' stateName={stateName} change={handleValue}/>
                    <Captcha ref={changeCaptcha}/> 
                    <Submit class='btn-success btn-block' value='ثبت'/>
                </form> 
            </div>
        )
    

}
export default withRouter(AddOrder);
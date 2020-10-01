import React, { useState, useRef } from 'react';
import { withRouter, Link, useHistory } from "react-router-dom";
import $ from "jquery";
import Swal from 'sweetalert2';
import Title from '../form/title';
import Point from '../form/point';
import ErrorAll from '../form/errorAll';
import Input from '../form/input';
import Captcha from '../form/captch';
import Submit from '../form/submit';
import HeadPages from '../headPages/headPages';
import NavPages from '../navPages/navPages';
import NavFloat from '../navFloat/navFloat';
import useScrollTo from '../hooks/useScrollTo';
import GuideShop from './guideShop';
import Pass from '../form/pass';
import LawShop from './lawShop';

const AddShop = (props) => {
    const history = useHistory()
    const changeCaptcha = useRef()
    const [element, setElement] = useState({
        name: null,
        lastName:null,
        mobile: null,
        pass: null,
    })
    const handleValue = e => {
        let { id, value } = e.target;
        const check = /^[0-9]{10}$/;
        if (id == 'mobile' && check.test(value)) {
            value = 0 + value;
        }
        setElement(prev => ({ ...prev, [id]: value }))
        // // because in this fun to send only element , also geting errors for of this dont use fun then
        axios.post('/shop', { [id]: value }, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } })
            .catch((error) => {
                if (error.response.status == 500) {
                    $('#' + id).css("border-color", "green");
                }
                else{
                const checkError = error.response.data.errors[id]
                if (checkError) {
                    setElement(prevState => ({ ...prevState, [id]: null }))
                    $('#' + id).css("border-color", "red")
                    $('.' + id + 'Feedback').html(checkError)
                }
                else {
                    $('#' + id).css("border-color", "green");
                }
            }
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { ...element, captcha: $('#captcha').val() }
        axios.post('/shop', data, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } })
            .then(response => {
                props.history.replace('/endAddShop', response.data.shop)
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'ثبت نام با موفقیت انجام شد .',
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
                    const offset = $("#" + firstError).offset();
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
                        setElement(perv => ({ ...perv, [i]: null }))
                        $('#' + i).css("border-color", "#e3e9ef")
                    }
                    $('.errorAll').html(
                        `<div class='alert alert-danger errorAll' >خطایی رخ داده است ، لطفا دوباره تلاش کنید .</div> `
                    )
                }
            })
    }
    const [handleScrollTo]=useScrollTo();
    return (
        <div className="addShopContainer appMain" id='addShopContainer'>
            <HeadPages title='ثبت نام فروشنده' />
            <NavPages buttonRight={[
                <button key='1'><Link to='/'>خانه</Link></button>,
                <button key='2' onClick={() => history.goBack()}>بازگشت</button>,
                <button key='4' onClick={()=>{handleScrollTo('lawShop')}}>قوانین و مقررات</button>,
                <button key='3' onClick={()=>{handleScrollTo('guideShop')}}>راهنما</button>,
            ]} />
            <div className='appText'>
                
                    در فرم زیر اطلاعات محصول سفارشی خود را وارد کنید . روند کار به این صورت است که پس از ثبت سفارش خود بطور خودکار اطلاعات ثبت شده به همه فروشندگان در سراسر کشور ارسال خواهد شد ، و هر فروشنده ای که این محصول را برای فروش دارد یا قادر به تهیه آن است اطلاعات کامل محصول خود را وارد نموده و به اطلاع شما خواهد رسید و شما بنا به میل خود محصول یک فروشنده را خریداری می کنید .
                    
            </div>
            {/* note : css code form in form.scss   */}
            <form className='form' id='formAddShop' onSubmit={handleSubmit} >
                <Title title='ثبت نام فروشنده' />
                <Point point='پر کردن فیلدهای ستاره دار الزامی است .' />
                <ErrorAll />
                <Input label='نام' id='name' star='ok' blur={handleValue} />
                <Input label='نام خانوادگی' id='lastName' star='ok' blur={handleValue} />
                
                
                <Input label='موبایل' id='mobile' star='ok' blur={handleValue} />
                <Pass label='رمز عبور' id='pass' star='ok' blur={handleValue} />
                
                <Captcha ref={changeCaptcha} />
                <Submit class='btn-success btn-block' value='ثبت' />
            </form>
            <GuideShop id='guideShop'/>
            {/* <NavFloat idStartShow='guideShop' btn={[
                <button onClick={()=>{handleScrollTo('guideFirstlyOrder')}} key='1'>راهنمای سفارش اولیه</button>,
                <button onClick={()=>{handleScrollTo('guidePursueOrder')}} key='2'>راهنمای پیگیری سفارش</button>,
                <button onClick={()=>{handleScrollTo('guideBuyOrder')}} key='3'>راهنمای خرید محصول</button>,
                <button onClick={()=>{handleScrollTo('guidePursueBuyOrder')}} key='4'>راهنمای پیگیری خرید</button>,
            ]} /> */}
            <LawShop id='lawShop' />
        </div>
    );
}
export default withRouter(AddShop);
import React, { useState, useRef } from 'react';
import { withRouter, Link, useHistory, useLocation } from "react-router-dom";
import $ from "jquery";
import Swal from 'sweetalert2';
import Title from '../form/title';
import Point from '../form/point';
import ErrorAll from '../form/errorAll';
import Input from '../form/input';
import Submit from '../form/submit';
import Pass from '../form/pass';
import HeadPages from '../headPages/headPages';
import NavPages from '../navPages/navPages';
import NavFloat from '../navFloat/navFloat';
import useScrollTo from '../hooks/useScrollTo';
import Guide from './guide/index';
import Law from './law/index';


const EndRegisterSocialNetwork = (props) => {
    const history = useHistory()
    const location = useLocation()
    let stateSocialNetwork = location.state
    const [element, setElement] = useState({
        id:stateSocialNetwork.id,
        name: stateSocialNetwork.name,
        lastName:stateSocialNetwork.lastName,
        mobile: stateSocialNetwork.Mobile,
        
    })
    
    const handleValue = e => {
        let { id, value } = e.target;
        const check = /^[0-9]{10}$/;
        if (id == 'mobile' && check.test(value)) {
            value = 0 + value;
        }
        setElement(prev => ({ ...prev, [id]: value }))
        // // because in this fun to send only element , also geting errors for of this dont use fun then
        axios.post('/socialNetwork', { [id]: value , id:stateSocialNetwork.id }, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } })
            .catch((error) => {
                if(error.response.status ==500){
                    $('#' + id).css("border-color", "green");
                }
                else
                {
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
        axios.patch('/socialNetwork/' + stateSocialNetwork.id, element, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } })
            .then(response => {
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'تغییرات با موفقیت ثبت شد .',
                    showConfirmButton: false,
                    timer: 3000,
                    onAfterClose: () => {
                        history.replace('/endRegisterSocialNetwork', response.data.socialNetwork);
                        window.scrollTo(0, 0)
                    }
                })
            })
            .catch(error => {
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
    const handlePassSubmit = (e)=>{
        e.preventDefault();
        // const  = { ...element, captcha: $('#captcha').val() }
        axios.patch('/socialNetwork/' + stateSocialNetwork.id, {pass: $('#pass').val(),id:stateSocialNetwork.id}, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } })
            .then(response => {
                $('#pass').val('');
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'رمز با موفقیت تغییر کرد .',
                    showConfirmButton: false,
                    timer: 3000,
                    onAfterClose: () => {
                        history.replace('/endRegisterSocialNetwork', response.data.socialNetwork);
                        window.scrollTo(0, 0);
                    }
                })
            })
            .catch(error => {
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
                    $('#formChangePass').trigger('reset');
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
            <HeadPages title='ویرایش فروشنده' />
            <NavPages buttonRight={[
                <button key='1'><Link to='/'>خانه</Link></button>,
                <button key='2' onClick={() => history.goBack()}>بازگشت</button>,
                <button key='4' onClick={()=>{handleScrollTo('lawShop')}}>قوانین و مقررات</button>,
                <button key='3' onClick={()=>{handleScrollTo('guideShop')}}>راهنما</button>,
            ]} />
            <div className='alert alert-success appAlert'>
                ثبت نام اولیه شما با موفقیت انجام شد . لطفا به نکات زیر توجه فرمایید.
            </div>
            <div className='appText'>
                
                    در فرم زیر اطلاعات محصول سفارشی خود را وارد کنید . روند کار به این صورت است که پس از ثبت سفارش خود بطور خودکار اطلاعات ثبت شده به همه فروشندگان در سراسر کشور ارسال خواهد شد ، و هر فروشنده ای که این محصول را برای فروش دارد یا قادر به تهیه آن است اطلاعات کامل محصول خود را وارد نموده و به اطلاع شما خواهد رسید و شما بنا به میل خود محصول یک فروشنده را خریداری می کنید .
                    
            </div>
            {/* note : css code form in form.scss   */}
            <form className='form' id='formEdit' onSubmit={handleSubmit} >
                <Title title='ویرایش فروشنده' />
                <Point point='پر کردن فیلدهای ستاره دار الزامی است .' />
                <ErrorAll />
                <Input label='نام' id='name' value={stateSocialNetwork.name} star='ok' blur={handleValue} />
                <Input label='نام خانوادگی' id='lastName' value={stateSocialNetwork.lastName} star='ok' blur={handleValue} />
                
                
                <Input label='موبایل' id='mobile' value={stateSocialNetwork.mobile} star='ok' blur={handleValue} />
                <Submit class='btn-success btn-block' value='ثبت' />
            </form>

            <form className='form' id='formChangePass' onSubmit={handlePassSubmit} >
                <Title title='تغییر رمز' />
                <Pass label='رمز عبور' id='pass' star='ok'  />
                <Submit class='btn-success btn-block' value='ثبت' />
            </form>
            <Guide id='guide'/>
            {/* <NavFloat idStartShow='guideShop' btn={[
                <button onClick={()=>{handleScrollTo('guideFirstlyOrder')}} key='1'>راهنمای سفارش اولیه</button>,
                <button onClick={()=>{handleScrollTo('guidePursueOrder')}} key='2'>راهنمای پیگیری سفارش</button>,
                <button onClick={()=>{handleScrollTo('guideBuyOrder')}} key='3'>راهنمای خرید محصول</button>,
                <button onClick={()=>{handleScrollTo('guidePursueBuyOrder')}} key='4'>راهنمای پیگیری خرید</button>,
            ]} /> */}
            <Law id='law' />
        </div>
    );
}
export default withRouter(EndRegisterSocialNetwork);
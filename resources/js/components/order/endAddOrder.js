import React, { useRef, useState, useEffect } from 'react';
import { useLocation, Link, useHistory } from "react-router-dom";
import Title from '../form/title';
import Point from '../form/point';
import ErrorAll from '../form/errorAll';
import Input from '../form/input';
import Select from '../form/select';
import Textarea from '../form/textarea';
import State from '../form/state';
import City from '../form/city';
import Captcha from '../form/captch';
import Submit from '../form/submit';
import useCity from '../form/uses/useCity';
import Swal from 'sweetalert2';
import NavPages from '../navPages/navPages';
import HeadPages from '../headPages/headPages';
import { useLastLocation } from 'react-router-last-location';
import useScrollTo from '../hooks/useScrollTo';
import GuideOrder from './guideOrder';
import NavFloat from '../navFloat/navFloat';
import LawOrder from './lawOrder';

const EndAddOrder = (props) => {
    const history = useHistory()
    const location = useLocation()
    let stateV = location.state
    const changeCaptcha = useRef()
    const [element, setElement] = useState({
        id: stateV.id,
        nameOrder: stateV.nameOrder,
        squad: stateV.squad,
        moduleOrder: stateV.moduleOrder,
        numOrder: stateV.numOrder,
        dis: stateV.dis,
        mobile: stateV.mobile,
        state: stateV.state,
        city: stateV.city,
    })
    const handleValue = e => {
        let { id, value } = e.target
        const check = /^[0-9]{10}$/
        if (id == 'mobile' && check.test(value)) {
            value = 0 + value
        }
        setElement(prev => ({ ...prev, [id]: value }))
        // // because in this fun to send only element , also geting errors for of this dont use fun then
        axios.patch('/order/' + stateV.id, { [id]: value }, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } })
            .catch((error) => {
                const checkError = error.response.data.errors[id]
                if (checkError) {
                    setElement(prevState => ({ ...prevState, [id]: null }))
                    $('#' + id).css("border-color", "red")
                    $('.' + id + 'Feedback').html(checkError)
                }
                else {
                    $('#' + id).css("border-color", "green")
                }
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let data = { ...element, captcha: $('#captcha').val() }
        axios.patch('/order/' + stateV.id, data, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } })
            .then(response => {
                changeCaptcha.current.refreshCaptcha();
                $('#captcha').val('')
                Swal.fire({
                    // position: 'top',
                    icon: 'success',
                    title: 'سفارش شما با موفقیت ویرایش شد .',
                    showConfirmButton: false,
                    timer: 2500,
                    onAfterClose: () => {
                        history.replace('/endAddOrder', response.data.order);
                        window.scrollTo(0, 0)
                    }
                })
            })
            .catch(error => {
                console.log(error)
                $('#captcha').val('')
                $('.captchaFeedback').html('')
                changeCaptcha.current.refreshCaptcha()
                if (error.response.status == 422) {
                    const errorData = error.response.data.errors
                    const firstError = Object.keys(errorData)[0]
                    const offset = $("#" + firstError).offset()
                    $(document).scrollTop(offset.top - 80)
                    for (let i in errorData) {
                        $('#' + i).css("border-color", "red")
                        $('.' + i + 'Feedback').html(errorData[i])
                    }
                }
                else {
                    const offset = $(".errorAll").offset()
                    $(document).scrollTop(offset.top - 80)
                    $('#formAddOrder').trigger('reset')
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
    const [stateName, getCity] = useCity(setElement, null)
    const lastLocation = useLastLocation();
    const [handleScrollTo] = useScrollTo()
    useEffect(() => {
        if (lastLocation && lastLocation.pathname !== '/order/addOrder') { history.replace('/') }
    }, []);

    return (
        <div className='appMain'>
            <HeadPages title='مشاهده و ویرایش سفارش' />
            <NavPages buttonRight={[
                <button key='1' onClick={() => { history.replace('/') }} >خانه</button>,
                <button key='2' onClick={() => history.goBack()}>بازگشت</button>,
                <button onClick={() => { handleScrollTo('lawOrder') }} key='4'>قوانین و مقررات</button>,
                <button onClick={() => { handleScrollTo('guideOrder') }} key='3'>راهنما</button>,
            ]}
                buttonLeft={[
                    <button key='1' className='edit' onClick={() => { handleScrollTo('formAddOrder') }} >ویرایش</button>,
                    <button key='2' className='green' onClick={() => { history.replace({ pathname: '/order/addOrder' }) }}>سفارش جدید</button>,
                    <button key='3' className='exit' onClick={() => { history.replace('/') }}>خروج</button>,
                ]} />
            <div className='alert alert-success appAlert'>
                سفارش شما با موفقیت ثبت شد . لطفا به نکات زیر توجه فرمایید !
            </div>
            
            <div className='appText'>
                <ol className='appOlNumFlat'>
                    <li>
                        جهت پیگیری سفارش خود صرفا با شماره موبایل <i className='number'> {element.mobile} </i> وارد شوید .
                    </li>
                    <li>
                        شماره پیگیری شما <i className='number'>{element.id}</i> است . این شماره را یادداشت کنید .
                    </li>
                    <li>
                        جهت ویرایش اطلاعات می توانید از فرم زیر استفاده کنید .
                    </li>
                    
                </ol>
                
            </div>
            <form className='form' id='formAddOrder' onSubmit={handleSubmit}>
                <Title title='ویرایش اطلاعات' />
                <Point point='پر کردن فیلدهای ستاره دار الزامی است .' />
                <ErrorAll />
                <Input label='نام محصول' id='nameOrder' star='ok' value={element.nameOrder} blur={handleValue} />
                <Select label='دسته محصول' id='squad' value={element.squad} change={handleValue}
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
                <Select label='واحد محصول' id='moduleOrder' star='ok' value={element.moduleOrder} change={handleValue}
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
                <Input label='تعداد محصول' id='numOrder' star='ok' value={element.numOrder} blur={handleValue} />
                <Textarea label='شرحی از محصول' id='dis' value={element.dis} blur={handleValue} />
                <Input label='موبایل' id='mobile' star='ok' value={element.mobile} blur={handleValue} />
                <State star='ok' getCity={getCity} value={element.state} change={handleValue} />
                <City star='ok' stateName={stateName} value={element.city} change={handleValue} />
                <Captcha ref={changeCaptcha} />
                <Submit class='btn-success btn-block' value='ویرایش' />
            </form>
            <GuideOrder id='guideOrder' />
            <NavFloat idStartShow='guideOrder' btn={[
                <button onClick={() => { handleScrollTo('guideFirstlyOrder') }} key='1'>راهنمای سفارش اولیه</button>,
                <button onClick={() => { handleScrollTo('guidePursueOrder') }} key='2'>راهنمای پیگیری سفارش</button>,
                <button onClick={() => { handleScrollTo('guideBuyOrder') }} key='3'>راهنمای خرید محصول</button>,
                <button onClick={() => { handleScrollTo('guidePursueBuyOrder') }} key='4'>راهنمای پیگیری خرید</button>,
            ]} />
            <LawOrder id='lawOrder' />
        </div>
    )
}
export default EndAddOrder
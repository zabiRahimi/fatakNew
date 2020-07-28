import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import CaptchaImg from '../captchaImg';
import State from '../city/state';
import City from '../city/city';



// headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}

class AddOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameOrder: null,
            squad: null,
            moduleOrder: null,
            numOrder: null,
            dis: null,
            mobeil: null,
            state: null,
            city: null,
        }
        this.refreshCaptcha = React.createRef()
    }
    handleDelError = e => {
        const { id } = e.target;
        
        $('#' + id).css("border-color", "#e3e9ef");
        $('#' + id + 'Alert').html('');
    }
    handleChange = e => {

        let { name, value, id } = e.target;
        this.nameElement = name;
        this.idElement = id;
        this.valueElement = value;
        console.log(id)
        
        const check = /^[0-9]{10}$/;
        if (name == 'mobeil' && check.test(value)) {
            value = 0 + value;
        }
        this.setState({ [name]: value })
        // because in this fun to send only element , also geting errors for of this dont use fun then
        axios.post('/order', { [name]: value }, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } })
            .catch((error) => {
                const checkError = error.response.data.errors[this.nameElement]
                if (checkError) {
                    this.setState({ [this.nameElement]: null })
                    $('#' + this.idElement).css("border-color", "red")
                    $('#' + this.idElement + 'Alert').html(checkError)
                }
                else {
                    $('#' + this.idElement).css("border-color", "green");
                    $('#' + this.idElement + 'Alert').html('');
                }
            })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let data = { ...this.state, captcha: $('#captcha').val() }
        axios.post('/order', data, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } })
            .then(response => {
                $('#formAddOrder').trigger('reset');
                alert('is very ok')
                console.log('okkk')
                this.refreshCaptcha.current.refreshCaptcha();
            })
            .catch(error => {
                $('#captcha').val('')
                $('#captcha').css("border-color", "red")
                this.refreshCaptcha.current.refreshCaptcha();
                const errorData = error.response.data.errors;
                console.log(Object.keys(errorData)[0])
                const firstError = Object.keys(errorData)[0];
                const offset = $("#" + firstError).offset();
                $(document).scrollTop(offset.top - 80)
                console.log((offset.top + 50))
                for (let xr in errorData) {
                    $('#' + xr).css("border-color", "red")
                    $('#' + xr + 'Alert').html(errorData[xr])
                }



            })
    }
    render() {
        return (
            <div className="orderContiner" id='orderContiner'>

                <form id='formAddOrder' onSubmit={this.handleSubmit}>
                    <div>
                        <label >نام محصول</label>
                        <input type='text' name='nameOrder' id='nameOrder' placeholder='name'
                            onBlur={this.handleChange} onClick={this.handleDelError} />
                        <div id='nameOrderAlert'></div>
                    </div>
                    <div>
                        <label >دسته محصول</label>
                        <select name='squad' id='squad' onChange={this.handleChange} onClick={this.handleDelError}>
                            <option value=''>دسته محصول را انتخاب کنید</option>
                            <option value='خوراکی'>خوراکی</option>
                            <option value='پوشاک'>پوشاک</option>
                            <option value='خودرو'>خودرو</option>
                            <option value='وسایل منزل'>وسایل منزل</option>
                            <option value='کتاب'>کتاب</option>
                            <option value='کامپیوتر'>کامپیوتر</option>
                        </select>
                    </div>
                    <div>
                        <label >واحد محصول</label>
                        <select name='moduleOrder' id='moduleOrder' onChange={this.handleChange} onClick={this.handleDelError}>
                            <option value=''>واحد محصول را انتخاب کنید</option>
                            <option value='عدد'>عدد</option>
                            <option value='گرم'>گرم</option>
                            <option value='کیلو گرم'>کیلو گرم</option>
                            <option value='گونی'>گونی</option>
                            <option value='بسته'>بسته</option>
                            <option value='کارتن'>کارتن</option>
                        </select>
                        <div id='moduleOrderAlert'></div>
                    </div>
                    <div>
                        <label >تعداد محصول</label>
                        <input type='text' name='numOrder' id='numOrder' placeholder='numOrder' onBlur={this.handleChange} onClick={this.handleDelError} />{this.state.moduleOrder}
                        <div id='numOrderAlert'></div>
                    </div>
                    <div>
                        <label >شرحی از محصول</label>
                        <textarea name='dis' id='dis' onBlur={this.handleChange} onClick={this.handleDelError}></textarea>

                    </div>
                    <div>
                        <label >موبایل</label>
                        <input type='text' name='mobeil' id='mobeil' onBlur={this.handleChange} onClick={this.handleDelError} />
                        <div id='mobeilAlert'></div>
                    </div>
                    <div>
                        <label >استان</label>
                        <State blur={this.handleChange} click={this.handleDelError}/>
                        <div id='stateAlert'></div>
                    </div>
                    <div>
                        <label >شهر</label>
                        <City />
                        <div id='cityAlert'></div>
                    </div>
                    <div>
                        <label >کد امنیتی</label>
                        <CaptchaImg ref={this.refreshCaptcha} />
                        <input type='text' name='captcha' id='captcha' placeholder='captcha' onClick={this.handleDelError} />
                        <div id='captchaAlert'></div>
                    </div>
                    <button type='submit'  >ارسال</button>
                </form>
            </div>
        )
    }

}
export default AddOrder;
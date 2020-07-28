import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";


class State extends Component {
    constructor(props) {
        super(props)


    }
    handleCity = e => {
        const { id } = e.target;
        $('.city').css("display", "none");
        $('.' + id + 'City').css("display", "block")
    }
    render() {
        return (
            <div>
                <select name='state' id='state' onBlur={this.props.blur} onClick={this.props.click}  >
                    <option value='' defaultValue=''   >انتخاب استان</option>
                    <option value="اردبیل" id='fars' onClick={this.handleCity}>اردبیل</option>
                    <option value="اصفهان" id='yazd' onClick={this.handleCity}>اصفهان</option>
                    <option value="البرز" id='ghom' onClick={this.handleCity}>البرز</option>
                    <option value="ایلام" onClick>ایلام</option>
                    <option value="آذربایجان شرقی" onClick>آذربایجان شرقی</option>
                    <option value="آذربایجان غربی" onClick>آذربایجان غربی</option>
                    <option value="بوشهر" onClick>بوشهر</option>
                    <option value="تهران" onClick>تهران</option>
                    <option value="چهار محال بختیاری" onClick>چهار محال بختیاری</option>
                    <option value="خراسان جنوبی" onClick>خراسان جنوبی</option>
                    <option value="خراسان رضوی" onClick>خراسان رضوی</option>
                    <option value="خراسان شمالی" onClick>خراسان شمالی</option>
                    <option value="خوزستان" onClick>خوزستان</option>
                    <option value="زنجان" onClick>زنجان</option>
                    <option value="سمنان" onClick>سمنان</option>
                    <option value="سیستان و بلوچستان" onClick>سیستان و بلوچستان</option>
                    <option value="فارس" onClick>فارس</option>
                    <option value="قزوین" onClick>قزوین</option>
                    <option value="قم" onClick>قم</option>
                    <option value="کردستان" onClick>کردستان</option>
                    <option value="کرمان" onClick>کرمان</option>
                    <option value="کرمانشاه" onClick>کرمانشاه</option>
                    <option value="کهگیلویه و بویراحمد" onClick>کهگیلویه و بویراحمد</option>
                    <option value="گلستان" onClick>گلستان</option>
                    <option value="گیلان" onClick>گیلان</option>
                    <option value="لرستان" onClick>لرستان</option>
                    <option value="مازندران" onClick>مازندران</option>
                    <option value="مرکزی" onClick>مرکزی</option>
                    <option value="هرمزگان" onClick>هرمزگان</option>
                    <option value="همدان" onClick>همدان</option>
                    <option value="یزد" onClick>یزد</option>
                </select>
            </div>
        )
    }

}
export default State;
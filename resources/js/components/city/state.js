import React, { Component } from 'react';
import $ from "jquery";

class State extends Component {
    handleCity = e => {
        const { id } = e.target;
        $('.city').css("display", "none");
        $('.' + id + 'City').css("display", "block")
        $("#city > option[value='']").prop('selected',true)
    }
    handleManyFun=(e)=>{
        this.props.delCity();
        this.handleCity(e);
    }
    render() {
        return (
            <div>
                <select name='state' id='state' onBlur={this.props.blur}  onClick={this.props.click}  >
                    <option value='' defaultValue=''id='no'  onClick={(e)=>{this.handleManyFun(e)}} >انتخاب استان</option>
                    <option value="اردبیل" id='ardebil' onClick={(e)=>{this.handleManyFun(e)}}  >اردبیل</option>
                    <option value="اصفهان" id='esfahan' onClick={(e)=>{this.handleManyFun(e)}} >اصفهان</option>
                    <option value="البرز" id='alborz' onClick={(e)=>{this.handleManyFun(e)}} >البرز</option>
                    <option value="ایلام" id='eilam' onClick={(e)=>{this.handleManyFun(e)}}>ایلام</option>
                    <option value="آذربایجان شرقی" id='azarbaijanSharghi' onClick={(e)=>{this.handleManyFun(e)}}>آذربایجان شرقی</option>
                    <option value="آذربایجان غربی" id='azarbaijanGhrbi' onClick={(e)=>{this.handleManyFun(e)}}>آذربایجان غربی</option>
                    <option value="بوشهر" id='boshher' onClick={(e)=>{this.handleManyFun(e)}}>بوشهر</option>
                    <option value="تهران" id='thran' onClick={(e)=>{this.handleManyFun(e)}}>تهران</option>
                    <option value="چهار محال بختیاری" id='charMahalBakhtiari' onClick={(e)=>{this.handleManyFun(e)}}>چهار محال بختیاری</option>
                    <option value="خراسان جنوبی" id='khrasanJonobi' onClick={(e)=>{this.handleManyFun(e)}}>خراسان جنوبی</option>
                    <option value="خراسان رضوی" id='khrasanRazavi' onClick={(e)=>{this.handleManyFun(e)}}>خراسان رضوی</option>
                    <option value="خراسان شمالی" id='khrasanShomali' onClick={(e)=>{this.handleManyFun(e)}}>خراسان شمالی</option>
                    <option value="خوزستان" id='khozestan' onClick={(e)=>{this.handleManyFun(e)}}>خوزستان</option>
                    <option value="زنجان" id='zanjan' onClick={(e)=>{this.handleManyFun(e)}}>زنجان</option>
                    <option value="سمنان" id='semnan' onClick={(e)=>{this.handleManyFun(e)}}>سمنان</option>
                    <option value="سیستان و بلوچستان" id='sistanVaBlochstan' onClick={(e)=>{this.handleManyFun(e)}}>سیستان و بلوچستان</option>
                    <option value="فارس" id='fars' onClick={(e)=>{this.handleManyFun(e)}}>فارس</option>
                    <option value="قزوین" id='ghazvin' onClick={(e)=>{this.handleManyFun(e)}}>قزوین</option>
                    <option value="قم" id='ghom' onClick={(e)=>{this.handleManyFun(e)}}>قم</option>
                    <option value="کردستان" id='kordestan' onClick={(e)=>{this.handleManyFun(e)}}>کردستان</option>
                    <option value="کرمان" id='krman' onClick={(e)=>{this.handleManyFun(e)}}>کرمان</option>
                    <option value="کرمانشاه" id='krmanShah' onClick={(e)=>{this.handleManyFun(e)}}>کرمانشاه</option>
                    <option value="کهگیلویه و بویراحمد" id='kohgiloihVaBoirahmad' onClick={(e)=>{this.handleManyFun(e)}}>کهگیلویه و بویراحمد</option>
                    <option value="گلستان" id='golstan' onClick={(e)=>{this.handleManyFun(e)}}>گلستان</option>
                    <option value="گیلان" id='gilan' onClick={(e)=>{this.handleManyFun(e)}}>گیلان</option>
                    <option value="لرستان" id='lorstan' onClick={(e)=>{this.handleManyFun(e)}}>لرستان</option>
                    <option value="مازندران" id='mazandaran' onClick={(e)=>{this.handleManyFun(e)}}>مازندران</option>
                    <option value="مرکزی" id='markazi' onClick={(e)=>{this.handleManyFun(e)}}>مرکزی</option>
                    <option value="هرمزگان" id='hormozgan' onClick={(e)=>{this.handleManyFun(e)}}>هرمزگان</option>
                    <option value="همدان" id='hamdan' onClick={(e)=>{this.handleManyFun(e)}}>همدان</option>
                    <option value="یزد" id='yazd' onClick={(e)=>{this.handleManyFun(e)}}>یزد</option>
                </select>
            </div>
        )
    }
}
export default State;
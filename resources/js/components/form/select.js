import React from 'react';
import $ from "jquery";

const Select = (props) => {
    const handleFocus = (e) => {
        let classInputF = e.target.id + 'Input';
        let classValidFeedbackF = e.target.id + 'Feedback';
        $('.' + classInputF).css('border-color', '#ced4da');
        $('.' + classValidFeedbackF).html(' ');
        
    }
    const handleChange=(e)=>{
        props.change(e);
        handleFocus(e);
    }
    const star = (props.star == 'ok') ? <i className="fa fa-star star" aria-hidden="true"></i> : '';
    const classInput = 'form-control inputForm ' + props.id + 'Input';
    const classValidFeedback = 'validFeedback' + ' ' + props.id + 'Feedback';
    return (
        <div className="form-group formGroupDiv">
            <label htmlFor={props.id} className='labelForm'>
                {/* css code label in form/main.scss */}
                {props.label}
                {star}
            </label>
            <select className="form-control selectForm" id={props.id} onChange={(e)=>{handleChange(e)}}>
                <option value="" defaultValue='' key="0">انتخاب کنید</option>
                {props.option}
            </select>
            <div className={classValidFeedback}>
                {/* css code label in form/main.scss */}
            </div>
        </div>
    )
}
export default Select;
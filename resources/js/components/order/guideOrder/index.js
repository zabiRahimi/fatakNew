import React from 'react';
import GuideFirstlyOrder from './guideFirstlyOrder';
import GuidePursueOrder from './guidePursueOrder';
import GuideBuyOrder from './guideBuyOrder';
import GuidePursueBuyOrder from './guidePursueBuyOrder';
import TitleLineGuide from '../../titleLine/titleLineGuide';
const GuideOrder = (props) => {
    const guideSelect=(id)=>{
        const offsetId = $("#"+id).offset();
       $('html,body').animate({ scrollTop: offsetId.top }, 1500);
    }
    return (
        <div className="continerGuideOrder" id={props.id}>
            <TitleLineGuide title='راهنما' />
            <div className='navGuideOrder'>
                <button className='btn btn-info' onClick={()=>{guideSelect('guideFirstlyOrder')}} id='' > راهنمای سفارش اولیه محصول</button>
                <button className='btn btn-info'  onClick={()=>{guideSelect('guidePursueOrder')}} id='' > راهنمای پیگیری سفارش</button>
                <button className='btn btn-info'  onClick={()=>{guideSelect('guideBuyOrder')}} id='' > راهنمای خرید محصول</button>
                <button className='btn btn-info'  onClick={()=>{guideSelect('guidePursueBuyOrder')}} id='' > راهنمای پیگیری خرید</button>
            </div>
            <GuideFirstlyOrder />
            <GuidePursueOrder />
            <GuideBuyOrder />
            <GuidePursueBuyOrder />
        </div>
    )
}
export default GuideOrder;
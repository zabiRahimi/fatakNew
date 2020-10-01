import React from 'react';
import GuideFirstlyOrder from './guideFirstlyOrder';
import GuidePursueOrder from './guidePursueOrder';
import GuideBuyOrder from './guideBuyOrder';
import GuidePursueBuyOrder from './guidePursueBuyOrder';
import TitleLineGuide from '../../titleLine/titleLineGuide';
import useScrollTo from '../../hooks/useScrollTo';
const GuideOrder = (props) => {
    const [handleScrollTo]=useScrollTo();
    return (
        <div className="continerGuideOrder" id={props.id}>
            <TitleLineGuide title='راهنما' />
            <div className='appNavGuide'>
                <button className='btn ' onClick={()=>{handleScrollTo('guideFirstlyOrder')}} id='' > راهنمای سفارش اولیه محصول</button>
                <button className='btn '  onClick={()=>{handleScrollTo('guidePursueOrder')}} id='' > راهنمای پیگیری سفارش</button>
                <button className='btn '  onClick={()=>{handleScrollTo('guideBuyOrder')}} id='' > راهنمای خرید محصول</button>
                <button className='btn '  onClick={()=>{handleScrollTo('guidePursueBuyOrder')}} id='' > راهنمای پیگیری خرید</button>
            </div>
            <GuideFirstlyOrder />
            <GuidePursueOrder />
            <GuideBuyOrder />
            <GuidePursueBuyOrder />
        </div>
    )
}
export default GuideOrder;
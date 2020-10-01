import React from 'react';
import TitleLineGuide from '../../titleLine/titleLineGuide';
import useScrollTo from '../../hooks/useScrollTo';
const GuideShop = (props) => {
    const [handleScrollTo]=useScrollTo();
    return (
        <div className="continerGuideShop appContainer" id={props.id}>
            <TitleLineGuide title='راهنما' />
            <div className='appNavGuide'>
                <button className='btn btn-info' onClick={()=>{handleScrollTo('guideFirstlyOrder')}} id='' > راهنمای سفارش اولیه محصول</button>
                <button className='btn btn-info'  onClick={()=>{handleScrollTo('guidePursueOrder')}} id='' > راهنمای پیگیری سفارش</button>
                <button className='btn btn-info'  onClick={()=>{handleScrollTo('guideBuyOrder')}} id='' > راهنمای خرید محصول</button>
                <button className='btn btn-info'  onClick={()=>{handleScrollTo('guidePursueBuyOrder')}} id='' > راهنمای پیگیری خرید</button>
            </div>
            {/* <GuideFirstlyOrder />
            <GuidePursueOrder />
            <GuideBuyOrder />
            <GuidePursueBuyOrder /> */}
        </div>
    )
}
export default GuideShop;
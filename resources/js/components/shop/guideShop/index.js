import React from 'react';
import TitleLineGuide from '../../titleLine/titleLineGuide';
import useScrollTo from '../../hooks/useScrollTo';
import GuideUseAppShop from './guideUseAppShop';
import GuideAddProShop from './guideAddProShop';
import GuideBillShop from './guideBillShop';
import GuideRegisterShop from './guideRegisterShop';
const GuideShop = (props) => {
    const [handleScrollTo]=useScrollTo();
    return (
        <div className="continerGuideShop appContainer" id={props.id}>
            <TitleLineGuide title='راهنما' />
            <div className='appNavGuide'>
                <button className='btn btn-info' onClick={()=>{handleScrollTo('guideRegisterShop','borderTop')}} id='' > راهنمای ثبت نام فروشنده</button>
                <button className='btn btn-info'  onClick={()=>{handleScrollTo('guideUseAppShop','borderTop')}} id='' > راهنمای استفاده از برنامه</button>
                <button className='btn btn-info'  onClick={()=>{handleScrollTo('guideAddProShop','borderTop')}} id='' > راهنمای مدیریت محصول</button>
                <button className='btn btn-info'  onClick={()=>{handleScrollTo('guideBillShop','borderTop')}} id='' > راهنمای صورت حساب فروشنده</button>
            </div>
           <GuideRegisterShop />
           <GuideBillShop />
           <GuideAddProShop />
           <GuideUseAppShop />
        </div>
    )
}
export default GuideShop;
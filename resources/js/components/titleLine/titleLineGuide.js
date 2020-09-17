import React from 'react';
const TitleLineGuide = (props) => {
    return (
        <div className="continerTitleLineGuide" >
            <div className='titleTitleLineGuide'>{props.title}</div>
            <div className='lineTitleLineGuide'></div>
        </div>
    )
}
export default TitleLineGuide;
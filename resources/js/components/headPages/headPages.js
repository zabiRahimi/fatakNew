import React from 'react';

export default function HeadPages(props) {
    return (
        <div className="headPagesContainer">
            <div className="headPagesTitle">
                <h1>{props.title}</h1>
            </div>
            <div className='headPagesBrand'>
                <div className='headPagesFa'><a href=''>فروشگاه فاتک</a></div>
                <div className="headPagesIn"><a href="">fatak.ir</a></div>
            </div>
        </div>
    )

}

import React from 'react';

export default function NavPages(props) {
    return (
        <div className="navPagesContainer">
            <div className="navPagesRight">
                {props.buttonRight}
            </div>
            <div className='navLeft'>
                {props.buttonLeft}
            </div>
        </div>
    )

}

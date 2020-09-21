import React, { useEffect } from 'react';
import $ from "jquery";

export default function ScrollBack(props) {
    const handleTop=()=>{
       $('html,body').animate({ scrollTop: 0 }, 1500);
    }
    useEffect(() => {
    window.addEventListener('scroll', showScrollBtn);
    },[])
    const showScrollBtn=()=>{
        let windowH=$(window).height() + 150;
        (windowH <= window.scrollY )?$('#scrollBackBtn').css('display','flex') :$('#scrollBackBtn').css('display','none');
    }
    return (
        <div className="scrollBackContainer">
            <button id='scrollBackBtn' onClick={handleTop}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                    <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
            </button>
        </div>
    )
}

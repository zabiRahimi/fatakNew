import React, { useEffect } from 'react';
import $ from "jquery";

export default function NavFloat(props) {
   useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    document.querySelectorAll('div.navFloatNav > button').forEach(item => {
        item.addEventListener('click', () => {
                closeNav() 
        })
    })
    return ()=>{
    $('body').css("overflow", "visible");
    window.removeEventListener('scroll', handleScroll);
    }
   },[])
   const handleScroll =()=>{
    // #   props.idStartShow
    // #   ای دی عنصری که بعد از اون باید دکمه راهنما نمایش داده شود . 
      const offset = $("#" + props.idStartShow).offset();
      const offsetTop=offset.top + 150;
      (offsetTop <= window.scrollY )?$('.navFloatOpen').css('display','flex') :$('.navFloatOpen').css('display','none');
   }
   const openNav=()=>{
    window.removeEventListener('scroll', handleScroll);
    $('body').css("overflow", "hidden")
    $('.navFloatOpen').toggle();
    $('.navFloatNav').toggle('slow');
    $('.navFloatNull').toggle('slow');
   }
   const closeNav=()=>{
    window.addEventListener('scroll', handleScroll)
    $('body').css("overflow", "visible")
    $('.navFloatOpen').toggle();
    $('.navFloatNav').toggle('slow');
    $('.navFloatNull').toggle('slow');
   }
    return (
        <div className="navFloatContainer">
            <div  className='rounded-circle  navFloatOpen'>
                <button onClick={openNav} className='rounded-circle navFloatOpenBtn'>راهنما</button> </div>
            <div className='navFloatNav' id='navFloatNav'>
                <div className='navFloatClose'><button onClick={closeNav}  ><i className='fas fa-times' aria-hidden="true"></i></button></div>
                {props.btn}
            </div>
            <div className='navFloatNull' onClick={closeNav}></div>
        </div>
    )
}

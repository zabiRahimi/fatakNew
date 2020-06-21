import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import { Link } from "react-router-dom";
class NavMo extends Component {
    showUlSub = (e) => {
        // document.getElementsByClassName('menuMobailUlSub').style.color = "blue";
        // var search_span = document.getElementsByClassName("menuMobailUlSub");
        // search_span[0].style.display = "flex";
        var getId='#'+e.currentTarget.getAttribute('id') + ' .menuMobailUlSub ';
        $('.menuMobailUlSub').css("display", "none");
        // $(getId).css("display", "flex");
        $(getId).toggle();
        //  var r =e.currentTarget.getAttribute('id')
        // alert(getId)

    }
    render() {
        return (
            <div className="navMoContainer">
                <div className="navMCI"><i className="fas fa-bars"></i></div>
                <div className="navMCT">منو</div>
                <div className="menu_mobail_1"></div>
                <div className="menu_mobail_2">

                    <div className="closeMenuMobail" >
                        <div className="closeMMRigth">
                            <div className="closeMMRI"><i className="fas fa-ellipsis-v"></i></div>
                            <div className="closeMMRT">منو</div>
                        </div>
                        <div className="closeMMLeft">
                            {/* onClick="hide_menu_mobail()" */}
                            <button ><span aria-hidden="true">&times;</span></button>
                        </div>
                    </div>

                    <ul className="menuMobailUl">
                        <li className="menuMULi">
                            <div className="">
                                <i className="far fa-window-maximize"></i>
                                <Link>خانه</Link>
                            </div>
                        </li>
                        <li className="menuMULiHasSub" id='orderLi' onClick={this.showUlSub}>
                            
                            <div className="menuMULHSUp">
                                <div className="menuMULHSURight">
                                    <i className="far fa-window-maximize"></i>
                                    <span>سفارش</span>
                                </div>
                                <div className="menuMULHSULeft">
                                    <img src="./images/imageWeb/sort1.png" />
                                </div>
                            </div>
                            <ul className="menuMobailUlSub">
                                <li><Link>ثبت سفارش</Link></li>
                                <li><Link>پیگیری سفارش</Link></li>
                                <li><Link>پیگیری خرید</Link></li>
                                <li><Link>راهنما</Link></li>
                            </ul>
                        </li>

                        <li className="menuMULiHasSub" id='chaneelLi' onClick={this.showUlSub}>
                            <div className="menuMULHSUp">
                                <div className="menuMULHSURight">
                                    <i className="fas fa-comments"></i>
                                    <span>مدیریت کانال و گروه</span>
                                </div>
                                <div className="menuMULHSULeft">
                                    <img src="./images/imageWeb/sort1.png" />
                                </div>
                            </div>

                            <ul className="menuMobailUlSub">
                                <li><Link>ورود</Link></li>
                                <li><Link>ثبت نام</Link></li>
                                <li><Link>راهنما</Link></li>
                            </ul>
                        </li>

                        <li className="menuMULiHasSub" id='shopLi' onClick={this.showUlSub}>
                            <div className="menuMULHSUp">
                                <div className="menuMULHSURight">
                                    <i className="fas fa-user-tag"></i>
                                    <span>مدیریت فروشندگان</span>
                                </div>
                                <div className="menuMULHSULeft">
                                    <img src="./images/imageWeb/sort1.png" />
                                </div>
                            </div>
                            <ul className="menuMobailUlSub">
                                <li><Link>ورود</Link></li>
                                <li><Link>ثبت نام</Link></li>
                                <li><Link>راهنما</Link></li>
                            </ul>
                        </li>

                        <li className="menuMobailUl">

                            <div className="">
                                <i className="fas fa-info-circle"></i>
                                <Link>درباره ما</Link>
                            </div>
                        </li>

                        <li className="menuMobailUl">
                            <i className="fas fa-phone"></i> <Link>ارتباط با ما</Link>
                            <div className="">
                                <i className="fas fa-info-circle"></i>
                                <Link>درباره ما</Link>
                            </div>
                        </li>
                        <li className="menuMobailUl">
                            <div className="">
                                <i className="fas fa-balance-scale"></i>
                                <Link>قوانین و مقرارت</Link>
                            </div>

                        </li>
                        <li className="menuMobailUl">
                            <div className="">
                                <i className="fas fa-gavel"></i>
                                <Link>ثبت شکایت</Link>
                            </div>
                        </li>
                        <li className="menuMULiHasSub" id='instructLi' onClick={this.showUlSub}>
                            <div className="menuMULHSUp">
                                <div className="menuMULHSURight">
                                    <i className="fas fa-compass"></i>
                                    <span>راهنما</span>
                                </div>
                                <div className="menuMULHSULeft">
                                    <img src="./images/imageWeb/sort1.png" />
                                </div>
                            </div>

                            <ul className="menuMobailUlSub">
                                <li>راهنمای استفاده از سایت</li>
                                <li>راهنمای خرید محصول</li>
                                <li>راهنمای سفارش محصول جدید</li>
                            </ul>
                        </li>

                        {/* <a href="/"><li className="modal_hide"><span><i className="far fa-window-maximize"></i> صفحه اصلی</span> </li></a>
                    <a href="/page_login"><li className="modal_hide" onclick="modal_sub_show()"><span><i className="fas fa-comments"></i> مدیریت کانال و گروه</span> </li></a>
                    <a href="/pageloginShop"><li className="modal_hide" onclick="modal_sub_show()"><span><i className="fas fa-user-tag"></i> مدیریت فروشندگان </span> </li></a>
                    <li className="modal_hide" onclick="modal_sub_show() ;hide_menu_mobail(); $('#modal_ghanon').modal('show')"><span><i className="fas fa-balance-scale"></i> قوانین و مقررات</span> </li>
                    <li className="modal_hide" onclick="modal_sub_show(); hide_menu_mobail(); $('#modal_shekait').modal('show')" ><span><i className="fas fa-gavel"></i> شکایت</span> </li>
                    <li className="modal_hide rahnama_m" onclick="modal_sub_show('rahnama_m')"><span><i className="fas fa-compass"></i> راهنما</span>
                        <img src="../../img_site/sort1.png" />
                        <ul>
                            <li>راهنمای استفاده از سایت</li>
                            <li>راهنمای خرید محصول</li>
                            <li>راهنمای سفارش محصول جدید</li>
                        </ul>
                    </li>
                    <li claclassNamess="modal_hide" onclick="modal_sub_show();hide_menu_mobail(); $('#modal_h_login').modal('show');captcha()"><span><i class="fas fa-sign-in-alt"></i> ورود</span> </li>
                    <li className="modal_hide" onclick="modal_sub_show();hide_menu_mobail(); $('#modal_h_sabtname').modal('show');captcha()"><span><i className="fas fa-user-plus"></i> ثبت نام</span> </li>
                    <li className="modal_hide" onclick="modal_sub_show();hide_menu_mobail(); $('#about_we').modal('show')"><span><i className="fas fa-info-circle"></i> درباره ما</span> </li>
                    <li className="modal_hide" onclick="modal_sub_show();hide_menu_mobail(); $('#contact_we').modal('show')"><span><i className="fas fa-phone"></i> تماس با ما</span> </li> */}
                    </ul>

                </div>
            </div>
        )
    }
}
// function showUlSub(){
//     // document.getElementById('menuMULiHasSub').style.display ='flex';
//     // document.getElementById("menuMULiHasSub").style.color = "blue";
//     alert('kkk')
// }
export default NavMo;
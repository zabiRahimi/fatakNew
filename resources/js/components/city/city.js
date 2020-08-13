import React from 'react';

const City =(props)=> {
    const handel=(e)=>{
       props.blur(e);
       props.clikc(e);

    }
    return (
        <div className='divCity' >
            <div className='defaultCity city noCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option value=''>ابتدا استان را انتخاب کنید</option>
                </select>
            </div>
            <div className='city ardebilCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect' >انتخاب شهر</option>
                    <option className="cityOff ostan1" value="اردبیل">اردبیل</option>
                    <option className="cityOff ostan1" value="بیله سوار">بیله سوار</option>
                    <option className="cityOff ostan1" value="پارس آباد">پارس آباد</option>
                    <option className="cityOff ostan1" value="خلخال">خلخال</option>
                    <option className="cityOff ostan1" value="سرعین">سرعین</option>
                    <option className="cityOff ostan1" value="کوثر">کوثر</option>
                    <option className="cityOff ostan1" value="گرمی">گرمی</option>
                    <option className="cityOff ostan1" value="مشکین شهر">مشکین شهر</option>
                    <option className="cityOff ostan1" value="نمین">نمین</option>
                    <option className="cityOff ostan1" value="نیر">نیر</option>
                </select>
            </div>
            <div className='city esfahanCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan2" value="آران و بیدگل">آران و بیدگل</option>
                    <option className="cityOff ostan2" value="اردستان">اردستان</option>
                    <option className="cityOff ostan2" value="اصفهان">اصفهان</option>
                    <option className="cityOff ostan2" value="برخوار">برخوار</option>
                    <option className="cityOff ostan2" value="بوئین و میاندشت">بوئین و میاندشت</option>
                    <option className="cityOff ostan2" value="تیران و کرون">تیران و کرون</option>
                    <option className="cityOff ostan2" value="چادگان">چادگان</option>
                    <option className="cityOff ostan2" value="خمینی شهر">خمینی شهر</option>
                    <option className="cityOff ostan2" value="خوانسار">خوانسار</option>
                    <option className="cityOff ostan2" value="خور و بیابانک">خور و بیابانک</option>
                    <option className="cityOff ostan2" value="سمیرم">سمیرم</option>
                    <option className="cityOff ostan2" value="شاهین شهر و میمه">شاهین شهر و میمه</option>
                    <option className="cityOff ostan2" value="شهرضا">شهرضا</option>
                    <option className="cityOff ostan2" value="دهاقان">دهاقان</option>
                    <option className="cityOff ostan2" value="فریدن">فریدن</option>
                    <option className="cityOff ostan2" value="فریدون شهر">فریدون شهر</option>
                    <option className="cityOff ostan2" value="فلاورجان">فلاورجان</option>
                    <option className="cityOff ostan2" value="کاشان">کاشان</option>
                    <option className="cityOff ostan2" value="گلپایگان">گلپایگان</option>
                    <option className="cityOff ostan2" value="لنجان">لنجان</option>
                    <option className="cityOff ostan2" value="مبارکه">مبارکه</option>
                    <option className="cityOff ostan2" value="نایین">نایین</option>
                    <option className="cityOff ostan2" value="نجف آباد">نجف آباد</option>
                    <option className="cityOff ostan2" value="نطنز">نطنز</option>
                </select>
            </div>
            <div className='city alborzCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan3" value="اشتهارد">اشتهارد</option>
                    <option className="cityOff ostan3" value="ساوجبلاغ">ساوجبلاغ</option>
                    <option className="cityOff ostan3" value="طالقان">طالقان</option>
                    <option className="cityOff ostan3" value="کرج">کرج</option>
                    <option className="cityOff ostan3" value="نظرآباد">نظرآباد</option>
                    <option className="cityOff ostan3" value="فردیس">فردیس</option>
                </select>
            </div>
            <div className='city eilamCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan4" value="آبدانان">آبدانان</option>
                    <option className="cityOff ostan4" value="ایلام">ایلام</option>
                    <option className="cityOff ostan4" value="ایوان">ایوان</option>
                    <option className="cityOff ostan4" value="بدره">بدره</option>
                    <option className="cityOff ostan4" value="دره شهر">دره شهر</option>
                    <option className="cityOff ostan4" value="دهلران">دهلران</option>
                    <option className="cityOff ostan4" value="سیروان">سیروان</option>
                    <option className="cityOff ostan4" value="شیروان و چرداول ">شیروان و چرداول </option>
                    <option className="cityOff ostan4" value="ملکشاهی">ملکشاهی</option>
                    <option className="cityOff ostan4" value="مهران">مهران</option>
                </select>
            </div><div className='city azarbaijanSharghiCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan5" value="آذرشهر">آذرشهر</option>
                    <option className="cityOff ostan5" value="اسکو">اسکو</option>
                    <option className="cityOff ostan5" value="اهر">اهر</option>
                    <option className="cityOff ostan5" value="بستان آباد">بستان آباد</option>
                    <option className="cityOff ostan5" value="بناب">بناب</option>
                    <option className="cityOff ostan5" value="تبریز">تبریز</option>
                    <option className="cityOff ostan5" value="جلفا">جلفا</option>
                    <option className="cityOff ostan5" value="چاراویماق">چاراویماق</option>
                    <option className="cityOff ostan5" value="خداآفرین">خداآفرین</option>
                    <option className="cityOff ostan5" value="سراب">سراب</option>
                    <option className="cityOff ostan5" value="شبستر">شبستر</option>
                    <option className="cityOff ostan5" value="عجب شیر">عجب شیر</option>
                    <option className="cityOff ostan5" value="کلیبر">کلیبر</option>
                    <option className="cityOff ostan5" value="مراغه">مراغه</option>
                    <option className="cityOff ostan5" value="مرند">مرند</option>
                    <option className="cityOff ostan5" value="ملکان">ملکان</option>
                    <option className="cityOff ostan5" value="ورزقان">ورزقان</option>
                    <option className="cityOff ostan5" value="هریس">هریس</option>
                    <option className="cityOff ostan5" value="هشترود">هشترود</option>
                    <option className="cityOff ostan5" value="هورندا">هورندا</option>
                </select>
            </div>
            <div className='city azarbaijanGhrbiCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan6" value="ارومیه">ارومیه</option>
                    <option className="cityOff ostan6" value="اشنویه">اشنویه</option>
                    <option className="cityOff ostan6" value="بومکان">بومکان</option>
                    <option className="cityOff ostan6" value="پلدشت">پلدشت</option>
                    <option className="cityOff ostan6" value="پیرانشهر">پیرانشهر</option>
                    <option className="cityOff ostan6" value="تکاب">تکاب</option>
                    <option className="cityOff ostan6" value="چالدران">چالدران</option>
                    <option className="cityOff ostan6" value="چایباره">چایباره</option>
                    <option className="cityOff ostan6" value="خوی">خوی</option>
                    <option className="cityOff ostan6" value="سردشت">سردشت</option>
                    <option className="cityOff ostan6" value="سلماس">سلماس</option>
                    <option className="cityOff ostan6" value="شاهین دژ">شاهین دژ</option>
                    <option className="cityOff ostan6" value="شوط">شوط</option>
                    <option className="cityOff ostan6" value="ماکو">ماکو</option>
                    <option className="cityOff ostan6" value="مهاباد">مهاباد</option>
                    <option className="cityOff ostan6" value="میاندواب">میاندواب</option>
                    <option className="cityOff ostan6" value="نقده">نقده</option>
                </select>
            </div>
            <div className='city boshherCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan7" value="بوشهر">بوشهر</option>
                    <option className="cityOff ostan7" value="تنگستان">تنگستان</option>
                    <option className="cityOff ostan7" value="جم">جم</option>
                    <option className="cityOff ostan7" value="دشتستان">دشتستان</option>
                    <option className="cityOff ostan7" value="دشتی">دشتی</option>
                    <option className="cityOff ostan7" value="دیر">دیر</option>
                    <option className="cityOff ostan7" value="دیلم">دیلم</option>
                    <option className="cityOff ostan7" value="عسلویه">عسلویه</option>
                    <option className="cityOff ostan7" value="کنگان">کنگان</option>
                    <option className="cityOff ostan7" value="گناوه">گناوه</option>
                </select>
            </div>
            <div className='city thranCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan8" value="اسلامشهر">اسلامشهر</option>
                    <option className="cityOff ostan8" value="بهارستان">بهارستان</option>
                    <option className="cityOff ostan8" value="پاکدشت">پاکدشت</option>
                    <option className="cityOff ostan8" value="پردیس">پردیس</option>
                    <option className="cityOff ostan8" value="پیشوا">پیشوا</option>
                    <option className="cityOff ostan8" value="تهران">تهران</option>
                    <option className="cityOff ostan8" value="دماوند">دماوند</option>
                    <option className="cityOff ostan8" value="رباط کریم">رباط کریم</option>
                    <option className="cityOff ostan8" value="ری">ری</option>
                    <option className="cityOff ostan8" value="شمیرانات">شمیرانات</option>
                    <option className="cityOff ostan8" value="شهریار">شهریار</option>
                    <option className="cityOff ostan8" value="فیروزکوه">فیروزکوه</option>
                    <option className="cityOff ostan8" value="قدس">قدس</option>
                    <option className="cityOff ostan8" value="قرچک">قرچک</option>
                    <option className="cityOff ostan8" value="ملارد">ملارد</option>
                    <option className="cityOff ostan8" value="ورامین">ورامین</option>
                </select>
            </div>
            <div className='city charMahalBakhtiariCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan9" value="اردل">اردل</option>
                    <option className="cityOff ostan9" value="بروجن">بروجن</option>
                    <option className="cityOff ostan9" value="بن">بن</option>
                    <option className="cityOff ostan9" value="سامان">سامان</option>
                    <option className="cityOff ostan9" value="شهرکرد">شهرکرد</option>
                    <option className="cityOff ostan9" value="فارسان">فارسان</option>
                    <option className="cityOff ostan9" value="کوهرنگ">کوهرنگ</option>
                    <option className="cityOff ostan9" value="کیار">کیار</option>
                    <option className="cityOff ostan9" value="لردگان">لردگان</option>
                </select>
            </div>
            <div className='city khrasanJonobiCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan10" value="بشرویه">بشرویه</option>
                    <option className="cityOff ostan10" value="بیرجند">بیرجند</option>
                    <option className="cityOff ostan10" value="خوسف">خوسف</option>
                    <option className="cityOff ostan10" value="درمیان">درمیان</option>
                    <option className="cityOff ostan10" value="زیرکوه">زیرکوه</option>
                    <option className="cityOff ostan10" value="سرایان">سرایان</option>
                    <option className="cityOff ostan10" value="سربیشه">سربیشه</option>
                    <option className="cityOff ostan10" value="طبس">طبس</option>
                    <option className="cityOff ostan10" value="فردوس">فردوس</option>
                    <option className="cityOff ostan10" value="قائنات">قائنات</option>
                    <option className="cityOff ostan10" value="نهبندان">نهبندان</option>
                </select>
            </div>
            <div className='city khrasanRazaviCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan11" value="باخزر">باخزر</option>
                    <option className="cityOff ostan11" value="بردسکن">بردسکن</option>
                    <option className="cityOff ostan11" value="بجستان">بجستان</option>
                    <option className="cityOff ostan11" value="تایباد">تایباد</option>
                    <option className="cityOff ostan11" value="تربت جام">تربت جام</option>
                    <option className="cityOff ostan11" value="تربت حیدریه">تربت حیدریه</option>
                    <option className="cityOff ostan11" value="چناران">چناران</option>
                    <option className="cityOff ostan11" value="جفتای">جفتای</option>
                    <option className="cityOff ostan11" value="جوین">جوین</option>
                    <option className="cityOff ostan11" value="خلیل آباد">خلیل آباد</option>
                    <option className="cityOff ostan11" value="خواف">خواف</option>
                    <option className="cityOff ostan11" value="خوشاب">خوشاب</option>
                    <option className="cityOff ostan11" value="داورزن">داورزن</option>
                    <option className="cityOff ostan11" value="درگز">درگز</option>
                    <option className="cityOff ostan11" value="رشتخوار">رشتخوار</option>
                    <option className="cityOff ostan11" value="زاوه">زاوه</option>
                    <option className="cityOff ostan11" value="سبزرود">سبزرود</option>
                    <option className="cityOff ostan11" value="سرخس">سرخس</option>
                    <option className="cityOff ostan11" value="فریمان">فریمان</option>
                    <option className="cityOff ostan11" value="فیروزه">فیروزه</option>
                    <option className="cityOff ostan11" value="قوچان">قوچان</option>
                    <option className="cityOff ostan11" value="طرقبه شاندیز">طرقبه شاندیز</option>
                    <option className="cityOff ostan11" value="کاشهر">کاشهر</option>
                    <option className="cityOff ostan11" value="کلات">کلات</option>
                    <option className="cityOff ostan11" value="گناباد">گناباد</option>
                    <option className="cityOff ostan11" value="مشهد">مشهد</option>
                    <option className="cityOff ostan11" value="مه ولات">مه ولات</option>
                    <option className="cityOff ostan11" value="نیشابور">نیشابور</option>
                </select>
            </div>
            <div className='city khrasanShomaliCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan12" value="اسفراین">اسفراین</option>
                    <option className="cityOff ostan12" value="بجنورد">بجنورد</option>
                    <option className="cityOff ostan12" value="جاجرم">جاجرم</option>
                    <option className="cityOff ostan12" value="شیروان">شیروان</option>
                    <option className="cityOff ostan12" value="فاروج">فاروج</option>
                    <option className="cityOff ostan12" value="گرمه">گرمه</option>
                    <option className="cityOff ostan12" value="مانه و سملقان">مانه و سملقان</option>
                    <option className="cityOff ostan12" value="راز و جرگلان">راز و جرگلان</option>
                </select>
            </div>
            <div className='city khozestanCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan13" value="آبادان">آبادان</option>
                    <option className="cityOff ostan13" value="آغاجاری">آغاجاری</option>
                    <option className="cityOff ostan13" value="امیدیه">امیدیه</option>
                    <option className="cityOff ostan13" value="اندیکا">اندیکا</option>
                    <option className="cityOff ostan13" value="اندیمشک">اندیمشک</option>
                    <option className="cityOff ostan13" value="اهواز">اهواز</option>
                    <option className="cityOff ostan13" value="ایذه">ایذه</option>
                    <option className="cityOff ostan13" value="باغملک">باغملک</option>
                    <option className="cityOff ostan13" value="باوی">باوی</option>
                    <option className="cityOff ostan13" value="بهبهان">بهبهان</option>
                    <option className="cityOff ostan13" value="حمیدیه">حمیدیه</option>
                    <option className="cityOff ostan13" value="خرمشهر">خرمشهر</option>
                    <option className="cityOff ostan13" value="دزفول">دزفول</option>
                    <option className="cityOff ostan13" value="دشت آزادگان">دشت آزادگان</option>
                    <option className="cityOff ostan13" value="رامشیر">رامشیر</option>
                    <option className="cityOff ostan13" value="رامهرمز">رامهرمز</option>
                    <option className="cityOff ostan13" value="شادگان">شادگان</option>
                    <option className="cityOff ostan13" value="شوش">شوش</option>
                    <option className="cityOff ostan13" value="شوشتر">شوشتر</option>
                    <option className="cityOff ostan13" value="کارون">کارون</option>
                    <option className="cityOff ostan13" value="گتوند">گتوند</option>
                    <option className="cityOff ostan13" value="لالی">لالی</option>
                    <option className="cityOff ostan13" value="ماهشهر">ماهشهر</option>
                    <option className="cityOff ostan13" value="مسجدسلیمان">مسجدسلیمان</option>
                    <option className="cityOff ostan13" value="هفتکل">هفتکل</option>
                    <option className="cityOff ostan13" value="هندیجان">هندیجان</option>
                    <option className="cityOff ostan13" value="هویزه">هویزه</option>
                </select>
            </div>
            <div className='city zanjanCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan14" value="ابهر">ابهر</option>
                    <option className="cityOff ostan14" value="ایجرود">ایجرود</option>
                    <option className="cityOff ostan14" value="خدابنده">خدابنده</option>
                    <option className="cityOff ostan14" value="خرمدره">خرمدره</option>
                    <option className="cityOff ostan14" value="زنجان">زنجان</option>
                    <option className="cityOff ostan14" value="سلطانیه">سلطانیه</option>
                    <option className="cityOff ostan14" value="طارم">طارم</option>
                    <option className="cityOff ostan14" value="ماهنشان">ماهنشان</option>
                </select>
            </div>
            <div className='city semnanCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan15" value="آردان">آردان</option>
                    <option className="cityOff ostan15" value="دامغان">دامغان</option>
                    <option className="cityOff ostan15" value="سرخه">سرخه</option>
                    <option className="cityOff ostan15" value="سمنان">سمنان</option>
                    <option className="cityOff ostan15" value="شاهرود">شاهرود</option>
                    <option className="cityOff ostan15" value="گرمسار">گرمسار</option>
                    <option className="cityOff ostan15" value="مهدی شهر">مهدی شهر</option>
                    <option className="cityOff ostan15" value="میامی">میامی</option>
                </select>
            </div>
            <div className='city sistanVaBlochstanCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan16" value="ایرانشهر">ایرانشهر</option>
                    <option className="cityOff ostan16" value="چابهار">چابهار</option>
                    <option className="cityOff ostan16" value="خاش">خاش</option>
                    <option className="cityOff ostan16" value="دلگان">دلگان</option>
                    <option className="cityOff ostan16" value="زابل">زابل</option>
                    <option className="cityOff ostan16" value="زاهدان">زاهدان</option>
                    <option className="cityOff ostan16" value="میرجاوه">میرجاوه</option>
                    <option className="cityOff ostan16" value="زهک">زهک</option>
                    <option className="cityOff ostan16" value="سراوان">سراوان</option>
                    <option className="cityOff ostan16" value="سرباز">سرباز</option>
                    <option className="cityOff ostan16" value="سیب وسوران">سیب وسوران</option>
                    <option className="cityOff ostan16" value="قصرقند">قصرقند</option>
                    <option className="cityOff ostan16" value="کنارک">کنارک</option>
                    <option className="cityOff ostan16" value="مهرستان">مهرستان</option>
                    <option className="cityOff ostan16" value="نیک شهر">نیک شهر</option>
                    <option className="cityOff ostan16" value="نیم روز">نیم روز</option>
                    <option className="cityOff ostan16" value="هامون">هامون</option>
                    <option className="cityOff ostan16" value="هیرمند">هیرمند</option>
                </select>
            </div>
            <div className='city farsCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan17" value="آباده">آباده</option>
                    <option className="cityOff ostan17" value="اقلید">اقلید</option>
                    <option className="cityOff ostan17" value="ارسنجان">ارسنجان</option>
                    <option className="cityOff ostan17" value="استهبان">استهبان</option>
                    <option className="cityOff ostan17" value="بوانات">بوانات</option>
                    <option className="cityOff ostan17" value="پاسارگاد">پاسارگاد</option>
                    <option className="cityOff ostan17" value="جهرم">جهرم</option>
                    <option className="cityOff ostan17" value="خرامه">خرامه</option>
                    <option className="cityOff ostan17" value="خرم بید">خرم بید</option>
                    <option className="cityOff ostan17" value="خنج">خنج</option>
                    <option className="cityOff ostan17" value="داراب">داراب</option>
                    <option className="cityOff ostan17" value="رستم">رستم</option>
                    <option className="cityOff ostan17" value="زرین دشت">زرین دشت</option>
                    <option className="cityOff ostan17" value="سپیدان">سپیدان</option>
                    <option className="cityOff ostan17" value="سروستان">سروستان</option>
                    <option className="cityOff ostan17" value="شیراز">شیراز</option>
                    <option className="cityOff ostan17" value="فراشبند">فراشبند</option>
                    <option className="cityOff ostan17" value="فسا">فسا</option>
                    <option className="cityOff ostan17" value="فیروزآباد">فیروزآباد</option>
                    <option className="cityOff ostan17" value="قیروکارزین">قیروکارزین</option>
                    <option className="cityOff ostan17" value="کازرون">کازرون</option>
                    <option className="cityOff ostan17" value="کوار">کوار</option>
                    <option className="cityOff ostan17" value="گراش">گراش</option>
                    <option className="cityOff ostan17" value="لارستان">لارستان</option>
                    <option className="cityOff ostan17" value="لامرد">لامرد</option>
                    <option className="cityOff ostan17" value="مرودشت">مرودشت</option>
                    <option className="cityOff ostan17" value="ممسنی">ممسنی</option>
                    <option className="cityOff ostan17" value="مهر">مهر</option>
                    <option className="cityOff ostan17" value="نی ریز">نی ریز</option>
                </select>
            </div>
            <div className='city ghazvinCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan18" value="آوج">آوج</option>
                    <option className="cityOff ostan18" value="آبیک">آبیک</option>
                    <option className="cityOff ostan18" value="البرز">البرز</option>
                    <option className="cityOff ostan18" value="بوئین زهرا">بوئین زهرا</option>
                    <option className="cityOff ostan18" value="تاکستان">تاکستان</option>
                    <option className="cityOff ostan18" value="قزوین">قزوین</option>

                </select>
            </div>
            <div className='city ghomCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan19" value="قم">قم</option>
                </select>
            </div>
            <div className='city kordestanCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan20" value="بانه">بانه</option>
                    <option className="cityOff ostan20" value="بیجار">بیجار</option>
                    <option className="cityOff ostan20" value="دهگلان">دهگلان</option>
                    <option className="cityOff ostan20" value="دیواندره">دیواندره</option>
                    <option className="cityOff ostan20" value="سروآباد">سروآباد</option>
                    <option className="cityOff ostan20" value="سقز">سقز</option>
                    <option className="cityOff ostan20" value="سنندج">سنندج</option>
                    <option className="cityOff ostan20" value="قروه">قروه</option>
                    <option className="cityOff ostan20" value="کامیاران">کامیاران</option>
                    <option className="cityOff ostan20" value="مریوان">مریوان</option>
                </select>
            </div>
            <div className='city krmanCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan21" value="ارزوئیه">ارزوئیه</option>
                    <option className="cityOff ostan21" value="انار">انار</option>
                    <option className="cityOff ostan21" value="بافت">بافت</option>
                    <option className="cityOff ostan21" value="بردسیر">بردسیر</option>
                    <option className="cityOff ostan21" value="بم">بم</option>
                    <option className="cityOff ostan21" value="جیرفت">جیرفت</option>
                    <option className="cityOff ostan21" value="رابر">رابر</option>
                    <option className="cityOff ostan21" value="راور">راور</option>
                    <option className="cityOff ostan21" value="رفسنجان">رفسنجان</option>
                    <option className="cityOff ostan21" value="رودبارجنوب">رودبارجنوب</option>
                    <option className="cityOff ostan21" value="ریگان">ریگان</option>
                    <option className="cityOff ostan21" value="زرند">زرند</option>
                    <option className="cityOff ostan21" value="سیرجان">سیرجان</option>
                    <option className="cityOff ostan21" value="شهربابک">شهربابک</option>
                    <option className="cityOff ostan21" value="عنبرآباد">عنبرآباد</option>
                    <option className="cityOff ostan21" value="فاریاب">فاریاب</option>
                    <option className="cityOff ostan21" value="فهرج">فهرج</option>
                    <option className="cityOff ostan21" value="قلعه گنج">قلعه گنج</option>
                    <option className="cityOff ostan21" value="کرمان">کرمان</option>
                    <option className="cityOff ostan21" value="کوهبنان">کوهبنان</option>
                    <option className="cityOff ostan21" value="کهنوج">کهنوج</option>
                    <option className="cityOff ostan21" value="منوجان">منوجان</option>
                    <option className="cityOff ostan21" value="فرماشیر">فرماشیر</option>
                </select>
            </div>
            <div className='city krmanShahCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan22" value="اسلام آبادغرب">اسلام آبادغرب</option>
                    <option className="cityOff ostan22" value="پاوه">پاوه</option>
                    <option className="cityOff ostan22" value="ثلاث باباجانی">ثلاث باباجانی</option>
                    <option className="cityOff ostan22" value="جوان رود">جوان رود</option>
                    <option className="cityOff ostan22" value="دالاهو">دالاهو</option>
                    <option className="cityOff ostan22" value="روانسر">روانسر</option>
                    <option className="cityOff ostan22" value="سرپل ذهاب">سرپل ذهاب</option>
                    <option className="cityOff ostan22" value="سرمست">سرمست</option>
                    <option className="cityOff ostan22" value="سطر">سطر</option>
                    <option className="cityOff ostan22" value="سنقر">سنقر</option>
                    <option className="cityOff ostan22" value="سومار">سومار</option>
                    <option className="cityOff ostan22" value="شاهو">شاهو</option>
                    <option className="cityOff ostan22" value="صحنه">صحنه</option>
                    <option className="cityOff ostan22" value="قصرشیرین">قصرشیرین</option>
                    <option className="cityOff ostan22" value="کرمانشاه">کرمانشاه</option>
                    <option className="cityOff ostan22" value="کنگاور">کنگاور</option>
                    <option className="cityOff ostan22" value="گیلان غرب">گیلان غرب</option>
                    <option className="cityOff ostan22" value="هرسین">هرسین</option>
                </select>
            </div>
            <div className='city kohgiloihVaBoirahmadCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan23" value="باشت">باشت</option>
                    <option className="cityOff ostan23" value="بویراحمد">بویراحمد</option>
                    <option className="cityOff ostan23" value="بهمئی">بهمئی</option>
                    <option className="cityOff ostan23" value="چرام">چرام</option>
                    <option className="cityOff ostan23" value="دنا">دنا</option>
                    <option className="cityOff ostan23" value="کهگیلویه">کهگیلویه</option>
                    <option className="cityOff ostan23" value="گچساران">گچساران</option>
                    <option className="cityOff ostan23" value="لنده">لنده</option>
                </select>
            </div>
            <div className='city golstanCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan24" value="آزادشهر">آزادشهر</option>
                    <option className="cityOff ostan24" value="آق قلا">آق قلا</option>
                    <option className="cityOff ostan24" value="گز">گز</option>
                    <option className="cityOff ostan24" value="ترکمن">ترکمن</option>
                    <option className="cityOff ostan24" value="رامیان">رامیان</option>
                    <option className="cityOff ostan24" value="علی آباد">علی آباد</option>
                    <option className="cityOff ostan24" value="کردکوی">کردکوی</option>
                    <option className="cityOff ostan24" value="کلاله">کلاله</option>
                    <option className="cityOff ostan24" value="گالیکش">گالیکش</option>
                    <option className="cityOff ostan24" value="گرگان">گرگان</option>
                    <option className="cityOff ostan24" value="گنبد کاووس">گنبد کاووس</option>
                    <option className="cityOff ostan24" value="گمیشان">گمیشان</option>
                    <option className="cityOff ostan24" value="مراوه تپه">مراوه تپه</option>
                    <option className="cityOff ostan24" value="مینودشت">مینودشت</option>
                </select>
            </div>
            <div className='city gilanCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan25" value="آستارا">آستارا</option>
                    <option className="cityOff ostan25" value="آستانه اشرفیه">آستانه اشرفیه</option>
                    <option className="cityOff ostan25" value="املش">املش</option>
                    <option className="cityOff ostan25" value="انزلی">انزلی</option>
                    <option className="cityOff ostan25" value="تالش">تالش</option>
                    <option className="cityOff ostan25" value="رشت">رشت</option>
                    <option className="cityOff ostan25" value="رضوانشهر">رضوانشهر</option>
                    <option className="cityOff ostan25" value="رودبار">رودبار</option>
                    <option className="cityOff ostan25" value="رودسر">رودسر</option>
                    <option className="cityOff ostan25" value="سیاهکل">سیاهکل</option>
                    <option className="cityOff ostan25" value="شفت">شفت</option>
                    <option className="cityOff ostan25" value="صومعه سرا ">صومعه سرا </option>
                    <option className="cityOff ostan25" value="فومن">فومن</option>
                    <option className="cityOff ostan25" value="لاهیجان">لاهیجان</option>
                    <option className="cityOff ostan25" value="لنگرود">لنگرود</option>
                    <option className="cityOff ostan25" value="ماسال">ماسال</option>
                </select>
            </div>
            <div className='city lorstanCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan26" value="ازنا">ازنا</option>
                    <option className="cityOff ostan26" value="الیگودرز">الیگودرز</option>
                    <option className="cityOff ostan26" value="بروجرد">بروجرد</option>
                    <option className="cityOff ostan26" value="پل دختر">پل دختر</option>
                    <option className="cityOff ostan26" value="خرم آباد">خرم آباد</option>
                    <option className="cityOff ostan26" value="دورود">دورود</option>
                    <option className="cityOff ostan26" value="چگنی">چگنی</option>
                    <option className="cityOff ostan26" value="دلفان">دلفان</option>
                    <option className="cityOff ostan26" value="سلسله">سلسله</option>
                    <option className="cityOff ostan26" value="کوهدشت">کوهدشت</option>
                </select>
            </div>
            <div className='city mazandaranCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan27" value="آمل">آمل</option>
                    <option className="cityOff ostan27" value="بابل">بابل</option>
                    <option className="cityOff ostan27" value="بابلسر">بابلسر</option>
                    <option className="cityOff ostan27" value="بهشهر">بهشهر</option>
                    <option className="cityOff ostan27" value="تنکابن">تنکابن</option>
                    <option className="cityOff ostan27" value="جویبار">جویبار</option>
                    <option className="cityOff ostan27" value="چالوس">چالوس</option>
                    <option className="cityOff ostan27" value="رامسر">رامسر</option>
                    <option className="cityOff ostan27" value="ساری">ساری</option>
                    <option className="cityOff ostan27" value="سوادکوه">سوادکوه</option>
                    <option className="cityOff ostan27" value="سیمرغ">سیمرغ</option>
                    <option className="cityOff ostan27" value="عباس آباد">عباس آباد</option>
                    <option className="cityOff ostan27" value="فریدون کنار">فریدون کنار</option>
                    <option className="cityOff ostan27" value="قائم شهر">قائم شهر</option>
                    <option className="cityOff ostan27" value="گلوگاه">گلوگاه</option>
                    <option className="cityOff ostan27" value="محمودآباد">محمودآباد</option>
                    <option className="cityOff ostan27" value="میان دورود">میان دورود</option>
                    <option className="cityOff ostan27" value="نور">نور</option>
                    <option className="cityOff ostan27" value="نوشهر">نوشهر</option>
                    <option className="cityOff ostan27" value="نکا">نکا</option>
                </select>
            </div>
            <div className='city markaziCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan28" value="آشتیان">آشتیان</option>
                    <option className="cityOff ostan28" value="اراک">اراک</option>
                    <option className="cityOff ostan28" value="تفرش">تفرش</option>
                    <option className="cityOff ostan28" value="خمین">خمین</option>
                    <option className="cityOff ostan28" value="خنداب">خنداب</option>
                    <option className="cityOff ostan28" value="دلیجان">دلیجان</option>
                    <option className="cityOff ostan28" value="زرندیه">زرندیه</option>
                    <option className="cityOff ostan28" value="ساوه">ساوه</option>
                    <option className="cityOff ostan28" value="شازند">شازند</option>
                    <option className="cityOff ostan28" value="کمیجان">کمیجان</option>
                    <option className="cityOff ostan28" value="فراهان">فراهان</option>
                    <option className="cityOff ostan28" value="محلات">محلات</option>
                </select>
            </div>
            <div className='city hormozganCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan29" value="ابوموسی">ابوموسی</option>
                    <option className="cityOff ostan29" value="بستک">بستک</option>
                    <option className="cityOff ostan29" value="بشاگرد">بشاگرد</option>
                    <option className="cityOff ostan29" value="بندرعباس">بندرعباس</option>
                    <option className="cityOff ostan29" value="لنگه">لنگه</option>
                    <option className="cityOff ostan29" value="پارسیان">پارسیان</option>
                    <option className="cityOff ostan29" value="جاسک">جاسک</option>
                    <option className="cityOff ostan29" value="حاجی آباد">حاجی آباد</option>
                    <option className="cityOff ostan29" value="خمیر">خمیر</option>
                    <option className="cityOff ostan29" value="رودان">رودان</option>
                    <option className="cityOff ostan29" value="سیریک">سیریک</option>
                    <option className="cityOff ostan29" value="قشم">قشم</option>
                    <option className="cityOff ostan29" value="میناب">میناب</option>
                </select>
            </div>
            <div className='city hamdanCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan30" value="اسدآباد">اسدآباد</option>
                    <option className="cityOff ostan30" value="بهار">بهار</option>
                    <option className="cityOff ostan30" value="توسیرکان">توسیرکان</option>
                    <option className="cityOff ostan30" value="رزن">رزن</option>
                    <option className="cityOff ostan30" value="فامنین">فامنین</option>
                    <option className="cityOff ostan30" value="کبودرآهنگ">کبودرآهنگ</option>
                    <option className="cityOff ostan30" value="ملایر">ملایر</option>
                    <option className="cityOff ostan30" value="نهاوند">نهاوند</option>
                    <option className="cityOff ostan30" value="همدان">همدان</option>
                </select>
            </div>
            <div className='city yazdCity'>
                <select name='city' id='city' className='scity'onChange={(e)=>{handel(e)}}  >
                    <option value='' defaultValue='' className='defaultSelect'>انتخاب شهر</option>
                    <option className="cityOff ostan31" value="ابرکوه">ابرکوه</option>
                    <option className="cityOff ostan31" value="اردکان">اردکان</option>
                    <option className="cityOff ostan31" value="اشکذر">اشکذر</option>
                    <option className="cityOff ostan31" value="بافق">بافق</option>
                    <option className="cityOff ostan31" value="بهاباد">بهاباد</option>
                    <option className="cityOff ostan31" value="تفت">تفت</option>
                    <option className="cityOff ostan31" value="خاتم">خاتم</option>
                    <option className="cityOff ostan31" value="مهریز">مهریز</option>
                    <option className="cityOff ostan31" value="میبد">میبد</option>
                    <option className="cityOff ostan31" value="یزد">یزد</option>
                </select>
            </div>
        </div>
    )
}
export default City;
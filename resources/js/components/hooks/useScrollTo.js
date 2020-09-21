import $ from "jquery";
// # جهت رفتن به یک جای خاص در صفحه از این هوک استفاده می شود 
const useScrollTo = ()=>{
    const handelScrollTo=(id)=>{
        const offsetElement = $("#"+id).offset();
        $('html,body').animate({ scrollTop: offsetElement.top - 10 }, 'slow');
     }    
return [handelScrollTo];
}
export default useScrollTo;
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
class StoreOrder extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    public function validationData() {
        $parametr=$this->all();
        $num_farsi=array('/(\x{06F0})/ui','/(\x{06F1})/ui','/(\x{06F2})/ui','/(\x{06F3})/ui','/(\x{06F4})/ui','/(\x{06F5})/ui','/(\x{06F6})/ui','/(\x{06F7})/ui','/(\x{06F8})/ui','/(\x{06F9})/ui');
        $num_english=array(0,1,2,3,4,5,6,7,8,9);
        if(!empty($parametr['mobile']) and !is_numeric($parametr['mobile'])){
            
          Request::merge([
            'mobile'=>preg_replace($num_farsi, $num_english, $parametr['mobile']),
          ]);
       
        }
        if(!empty($parametr['numOrder'])and !is_numeric($parametr['numOrder'])){
          Request::merge([
            'numOrder'=>preg_replace($num_farsi, $num_english, $parametr['numOrder']),
          ]);
        }
        if(!empty($parametr['captcha'])and !is_numeric($parametr['captcha'])){
          Request::merge([
            'captcha'=>preg_replace($num_farsi, $num_english, $parametr['captcha']),
          ]);
        }
        return $this->all();
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
          'nameOrder'=>'required' ,
          'squad'=>'nullable' ,
          'moduleOrder'=>'required',
          'numOrder'=>'required|numeric',
          'dis'=>'nullable',
          'mobile'=>'required|mobile' ,
          'state'=>'required' ,
          'city'=>'required' ,
          'captcha'=>'required|captcha'
        ];
    }
}

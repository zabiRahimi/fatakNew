<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;
use Illuminate\Foundation\Http\FormRequest;
// use Illuminate\Validation\Rule;

class StoreShop extends FormRequest
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
        if(!empty($parametr['mobile'])and !is_numeric($parametr['mobile'])){
          Request::merge([
            'mobile'=>preg_replace($num_farsi, $num_english, $parametr['mobile']),
          ]);
        }
        if(!empty($parametr['captcha'])and !is_numeric($parametr['captcha'])){
          Request::merge([
            'captcha'=>preg_replace($num_farsi, $num_english, $parametr['captcha']),
          ]);
          }
        if(!empty($parametr['pass'])){
        Request::merge([
          'pass'=>preg_replace($num_farsi, $num_english, $parametr['pass']),
        ]);
        }
        return $this->all();
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {   
      (!empty($this->id))? $id=',' . $this->id : $id='|';
        return [
          'id'=>'sometimes|required|numeric',
          'name'=>'sometimes|required|name|min:3',
          'lastName'=>'sometimes|required|name|min:3',
          'mobile'=>'sometimes|required|mobile|unique:shops,mobile'. $id,
          'pass'=>'sometimes|required|pass|min:4',
          'shop'=>'sometimes|required|pas|min:4|unique:shops,shop' . $id,
          'nationalCode'=>'sometimes|required|codemly|unique:shops,nationalCode'. $id,
          'state'=>'sometimes|required',
          'city'=>'sometimes|required',
          'address'=>'sometimes|required|address',
          'postalCode'=>'sometimes|required|codepost',
          'tel'=>'sometimes|required|tel',
          'email'=>'sometimes|required|email|unique:shops,email' . $id,
          'accountNumber'=>'sometimes|required|numeric',
          'cardNumber'=>'sometimes|required|numeric',
          'accountOwner'=>'sometimes|required|name',
          'bank'=>'sometimes|required|farsi',
          'acceptanceOfRules'=>'sometimes|required|accepted',
          'captcha'=>'sometimes|required|captcha',
        ];
    }
}

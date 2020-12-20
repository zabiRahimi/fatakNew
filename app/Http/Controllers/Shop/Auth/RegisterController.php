<?php

namespace App\Http\Controllers\Shop\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\Shop;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    // use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    // protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest:shop');
        $this->middleware('guest:shop');
    }

    public function redirectPath()
    {


        // return '/shopProfile';
    }
    public function showRegistrationForm()
    {
        return view('auth.shop-register');
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        event(new Registered($user = $this->create($request->all())));

        $this->guard('shop')->login($user);

        // return $this->registered($request, $user)
        //                 ?: redirect($this->redirectPath());
        return $this->registered($request, $user)
                        ?: response()->json(['user'=> $user]);
    }

    /**
     * Get the guard to be used during registration.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        // return Auth::guard('shop');
        return Auth::guard('shop');
        
    }

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function registered(Request $request, $user)
    {
        //
    }
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        (!empty($data->id))? $id=',' . $data->id : $id=',';
        return Validator::make($data, [
            // 'shop' => ['required', 'string', 'max:255','unique:shops'],
            // 'name' => ['required', 'string', 'max:255'],
            // 'username' => ['required', 'string', 'max:255','unique:shops'],
            // 'mobile' => ['required', 'numeric' , 'unique:shops'],
            // 'email' => ['required', 'string', 'email', 'max:255', 'unique:shops'],
            // 'pass' => ['required', 'string', 'min:6', 'confirmed'],
          'id'=>['sometimes' , 'required' , 'numeric'],
          'name'=>['sometimes' , 'required' , 'name' , 'min:3'],
          'lastName'=>['sometimes' , 'required' , 'name' , 'min:3'],
          'mobile'=>['sometimes' , 'required' , 'mobile' , 'unique:shops,mobile'. $id],
          'pass'=>['sometimes' , 'required' , 'pass' , 'min:4'],
          'shop'=>['sometimes' , 'required' , 'pass' , 'min:4' , 'unique:shops,shop' . $id],
          'nationalCode'=>['sometimes' , 'required' , 'codemly' , 'unique:shops,nationalCode'. $id],
          'state'=>['sometimes' , 'required'],
          'city'=>['sometimes' , 'required'],
          'address'=>['sometimes' , 'required' , 'address'],
          'postalCode'=>['sometimes' , 'required' , 'codepost'],
          'tel'=>['sometimes' , 'required' , 'tel'],
          'email'=>['sometimes' , 'required' , 'email' , 'unique:shops,email' . $id],
          'accountNumber'=>['sometimes' , 'required' , 'numeric'],
          'cardNumber'=>['sometimes' , 'required' , 'numeric'],
          'accountOwner'=>['sometimes' , 'required' , 'name'],
          'bank'=>['sometimes' , 'required' , 'farsi'],
          'acceptanceOfRules'=>['sometimes' , 'required' , 'accepted'],
          'captcha'=>['sometimes' , 'required' , 'captcha'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return Shop::create([
            // 'shop' => $data['shop'],
            'name' => $data['name'],
            'lastName' => $data['lastName'],
            'mobile' => $data['mobile'],
            // 'email' => $data['email'],
            'pass' => Hash::make($data['pass']),
            'date_ad' => time(),
            'date_up' => time(),
            'stage'=>'1',
            'show' => '1',
        ]);
    }
}

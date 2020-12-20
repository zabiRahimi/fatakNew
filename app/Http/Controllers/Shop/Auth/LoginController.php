<?php

namespace App\Http\Controllers\Shop\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Route;
class LoginController extends Controller
{
  public function __construct()
  {
     $this->middleware('guest:shop')->except('logout');
  }

  public function showLoginForm()
  {
    return view('auth.shop-login');
  }

  public function login(Request $request)
  {
    // Validate the form data
    $this->validate($request, [
      'username'   => 'required',
      'password' => 'required|min:6'
    ]);

    // Attempt to log the user in
    if(preg_match('/^09[0-9]{9}$/', $request->username)){$fieldType='mobile';}
    elseif(filter_var($request->username, FILTER_VALIDATE_EMAIL)){$fieldType='email';}
    else{$fieldType='username';}
    if (Auth::guard('shop')->attempt([$fieldType => $request->username, 'password' => $request->password], $request->remember)) {
      // if successful, then redirect to their intended location
      return redirect(route('shopProfile'));

    }
    // if unsuccessful, then redirect back to the login with the form data
    return redirect()->back()->withInput($request->only('email', 'remember'));

  }

  public function logout()
  {
      Auth::guard('shop')->logout();
      // return redirect(route('shop.login'));
  }
}

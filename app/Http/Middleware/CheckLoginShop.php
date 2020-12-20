<?php

namespace App\Http\Middleware;

use Closure;

class CheckLoginShop
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next,$guard='shop')
    {
      if(!auth()->guard($guard)->check()) {
          return redirect(route('shop.login'));
      }
      return $next($request);
    }

}


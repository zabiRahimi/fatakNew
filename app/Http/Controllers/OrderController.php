<?php

namespace App\Http\Controllers;
use App\Models\Order;

use Illuminate\Http\Request;
use App\Http\Requests\StoreOrder;


class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrder $request)
    {
        $data=$request->all();
        unset($data['captcha']);
        $data['date_ad']=time();
        $data['date_up']=time();
        $data['stage']=1;
        $data['show']=1;
        
        $order=Order::create($data);
        if(empty($order->id)){
            // return response()->json(['errors' => ['no_mobail' => ['']]], 422);   
            return response()->json(['errors' => ['error' => ['خطایی رخ داده است لطفا دوباره تلاش کنید .']]], 422);       

        }
        return response()->json(['order'=> $order]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

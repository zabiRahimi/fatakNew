<?php

namespace App\Http\Controllers;
use App\Models\Shop;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Http\Requests\StoreShop;


class ShopController extends Controller
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
    public function store(StoreShop $request)
    {
        $data=$request->all();
        unset($data['captcha']);
        unset($data['pass']);
        $data['pass']= Hash::make($request->pass);
        $data['date_ad']=time();
        $data['date_up']=time();
        $data['stage']=1;
        $data['show']=1;
        
        $shop=Shop::create($data);
        if(empty($shop->id)){
            return response()->json(['errors' => ['errorAll' => ['<b>خطایی رخ داده است</b>']]], 500);   
        }
        return response()->json(['shop'=> $shop]);
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
    public function update(StoreShop $request, $id)
    {
        $shop=Shop::find($request->id);
        $data=$request->all();
        if(!empty($request->pass)){unset($data['pass']);$data['pass']= Hash::make($request->pass);}
        // $data['date_ad']=time();
        $data['date_up']=time();
        // $data['stage']=1;
        // $data['show']=1;
        $shop->fill($data)->save();
        // $order=Order::create($data);
        if(empty($shop->id)){
            return response()->json(['errors' => ['errorAll' => ['<b>خطایی رخ داده است</b>']]], 500);   
        }
        return response()->json(['shop'=> $shop]);
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

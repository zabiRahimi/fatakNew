<?php

namespace App\Http\Controllers;

use App\Models\SocialNetwork;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Http\Requests\StoreSocialNetwork;


class SocialNetworkController extends Controller
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
    public function store(StoreSocialNetwork $request)
    {
        $data=$request->all();
        unset($data['captcha']);
        unset($data['pass']);
        $data['pass']= Hash::make($request->pass);
        $data['date_ad']=time();
        $data['date_up']=time();
        $data['stage']=1;
        $data['show']=1;
        $socialNetwork=SocialNetwork::create($data);
        if(empty($socialNetwork->id)){
            return response()->json(['errors' => ['errorAll' => ['<b>خطایی رخ داده است</b>']]], 500);   
        }
        return response()->json(['socialNetwork'=> $socialNetwork]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SocialNetwork  $socialNetwork
     * @return \Illuminate\Http\Response
     */
    public function show(SocialNetwork $channel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SocialNetwork  $socialNetwork
     * @return \Illuminate\Http\Response
     */
    public function edit(SocialNetwork $socialNetwork)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Channel  $socialNetwork
     * @return \Illuminate\Http\Response
     */
    public function update(StoreSocialNetwork $request)
    {
        $socialNetwork=SocialNetwork::find($request->id);
        $data=$request->all();
        if(!empty($request->pass)){unset($data['pass']);$data['pass']= Hash::make($request->pass);}
        // $data['date_ad']=time();
        $data['date_up']=time();
        // $data['stage']=1;
        // $data['show']=1;
        $socialNetwork->fill($data)->save();
        // $order=Order::create($data);
        if(empty($socialNetwork->id)){
            return response()->json(['errors' => ['errorAll' => ['<b>خطایی رخ داده است</b>']]], 500);   
        }
        return response()->json(['socialNetwork'=> $socialNetwork]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SocialNetwork  $socialNetwork
     * @return \Illuminate\Http\Response
     */
    public function destroy(SocialNetwork $socialNetwork)
    {
        //
    }
}

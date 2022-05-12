<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class StarshipsController extends Controller
{
   function index(){
     $response = Http::get('https://swapi.dev/api/starships/');
     echo $response;
    // return  response()->json($data);
   }
}

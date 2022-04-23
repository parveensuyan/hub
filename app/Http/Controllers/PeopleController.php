<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;

use Illuminate\Http\Request;

class PeopleController extends Controller
{
   function index(){
     $response = Http::get('https://swapi.dev/api/people/');
     echo $response;
    // return  response()->json($data);
   }
     function home(){
     return view('testapi');
    }
}

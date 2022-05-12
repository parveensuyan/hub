<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PlanetsController extends Controller
{
   function index(){
     $response = Http::get('https://swapi.dev/api/planets/');
     echo $response;
    // return  response()->json($data);
   }
}

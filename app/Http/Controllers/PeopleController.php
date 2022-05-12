<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;

use Illuminate\Http\Request;

class PeopleController extends Controller
{
  function index(Request $request){
   $response = Http::get('https://swapi.dev/api/people?search=' . $request->get('search'));
      echo $response;
     // return  response()->json($data);
    }
  }


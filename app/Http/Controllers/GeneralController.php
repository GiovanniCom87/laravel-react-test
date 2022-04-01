<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

class GeneralController extends Controller
{
    public function index(){

        $posts = Post::get();
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'saluto' => 'Ciao a tutti',
            'posts'=> $posts
        ]);
    }
}

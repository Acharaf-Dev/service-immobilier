<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AnnonceController;
use App\Http\Controllers\AdminController;

// Routes pour l'authentification
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Routes pour les utilisateurs
Route::middleware('auth:sanctum')->group(function () {
    Route::get('profile', [UserController::class, 'profile']);
    Route::put('profile', [UserController::class, 'updateProfile']);
});

// Routes pour les annonces
Route::middleware('auth:sanctum')->group(function () {
    Route::get('annonces', [AnnonceController::class, 'index']);
    Route::post('annonces', [AnnonceController::class, 'create']);
    Route::get('annonces/{id}', [AnnonceController::class, 'show']);
    Route::put('annonces/{id}', [AnnonceController::class, 'update']);
    Route::delete('annonces/{id}', [AnnonceController::class, 'delete']);
});

// Routes administrateur
Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    Route::get('users', [AdminController::class, 'getUsers']);
    Route::put('users/{id}/promote', [AdminController::class, 'promoteToOwner']);
    Route::get('transactions', [AdminController::class, 'getTransactions']);
});

// <?php

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\AuthController;
// use App\Http\Controllers\UserController;
// use App\Http\Controllers\AnnonceController;
// use App\Http\Controllers\AdminController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::post('/register', [AuthController::class, 'register']);
// Route::post('/login', [AuthController::class, 'login']);

// Route::middleware('auth:sanctum')->group(function () {
//     Route::get('/annonces', [AnnonceController::class, 'index']);
//     Route::post('/annonces', [AnnonceController::class, 'store']);
//     Route::get('/user', [UserController::class, 'profile']);
//     Route::post('/logout', [AuthController::class, 'logout']);
// });

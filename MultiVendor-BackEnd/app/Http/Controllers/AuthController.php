<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Admin;
use App\Models\Customer;
use App\Models\Vendor;
use App\Models\Balance;
use App\Models\Cart;
use Validator;

class AuthController extends Controller
{

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request){
    	$validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->createNewToken($token);
    }
    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {

        if($request->user_type == 0){
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|between:2,100',
                'email' => 'required|string|email|max:100|unique:users',
                'password' => 'required|string|confirmed|min:6',
                'user_type' => 'required'
            ]);
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
            $user = User::create(array_merge(
                        $validator->validated(),
                        ['password' => bcrypt($request->password)]
                    ));

            $admin = new Admin;
            $admin ->user_id = $user->id;
            $admin ->total_balance = 0;
            $admin ->income = 0;
            $admin ->save();

            return response()->json([
                'message' => 'Admin successfully registered',
                'admin' => $admin,
            ], 201);
        }
        elseif($request->user_type == 2){
           $validator = Validator::make($request->all(), [
                'name' => 'required|string|between:2,100',
                'email' => 'required|string|email|max:100|unique:users',
                'password' => 'required|string|confirmed|min:6',
                'user_type' => 'required',
                'country' => 'required|string',
                'state' => 'required|string',
                'date_of_birth' => 'required|date',
                'gender' => 'required|string',
            ]);
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
            $user = new User;
            $user ->name = $request->name;
            $user ->email = $request->email;
            $user ->password = bcrypt($request->password);
            $user ->user_type = $request->user_type;
            $user ->save();

            $customer = new Customer;
            $customer -> user_id = $user->id;
            $customer -> country = $request->country;
            $customer -> state = $request->state;
            $customer -> gender = $request->gender;
            $customer -> date_of_birth = $request->date_of_birth;
            $customer ->save();

            $cart = new Cart;
            $cart->customer_id = $customer->id;
            $cart->save();

            return response()->json([
                'message' => 'Customer successfully registered',
                'customer' => $customer,
            ], 201);
        }

        elseif($request->user_type == 1){
            $validator = Validator::make($request->all(), [
                 'name' => 'required|string|between:2,100',
                 'email' => 'required|string|email|max:100|unique:users',
                 'password' => 'required|string|confirmed|min:6',
                 'user_type' => 'required',

             ]);
             if($validator->fails()){
                 return response()->json($validator->errors()->toJson(), 400);
             }
             $user = new User;
             $user ->name = $request->name;
             $user ->email = $request->email;
             $user ->password = bcrypt($request->password);
             $user ->user_type = $request->user_type;
             $user ->save();

             $vendor = new Vendor;
             $vendor -> user_id = $user->id;
             $vendor ->save();

             $balance = new Balance;
             $balance->vendor_id = $user->id;
             $balance->save();


             return response()->json([
                 'message' => 'Vendor successfully registered',
                 'vendor' => $vendor,
             ], 201);
         }

    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }

    public function notFound(){
        return response()->json(['error' => 'Unauthorized'], 401);
    }
}

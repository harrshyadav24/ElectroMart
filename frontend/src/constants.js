/**   -> 
 *  USE PROXY and don't give 'http://localhost:5000/'
 * 
 // export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';

* ERROR I WAS GETTING:
 Access to fetch at 'http://localhost:5000/api/products/top' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

 */



export const BASE_URL     = 'https://electro-mart-gamma.vercel.app/'; 
export const PRODUCTS_URL = 'https://electro-mart-gamma.vercel.app/api/products';       
export const USERS_URL    = 'https://electro-mart-gamma.vercel.app/api/users';
export const ORDERS_URL   = 'https://electro-mart-gamma.vercel.app/api/orders';
export const PAYPAL_URL   = 'https://electro-mart-gamma.vercel.app/api/config/paypal';
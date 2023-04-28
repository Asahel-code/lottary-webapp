import { Dashboard, Login, Otp, Register } from '../pages';
import AuthCheck from './middleware/AuthCheck';

export const routes = [
    {
        path: '/',
        element: <AuthCheck><Dashboard /></AuthCheck>
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/verify-account',
        element: <AuthCheck><Otp /></AuthCheck>
    },

]
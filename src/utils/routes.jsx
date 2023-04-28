import { Dashboard, Login, Otp, Register } from '../pages'

export const routes = [
    {
        path: '/',
        element: <Dashboard />
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
        element: <Otp/>
    },

]
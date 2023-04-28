import { useState } from "react"
import AuthServices from "../utils/services/AuthServices";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Layout from "../components/Layout";
import { getError } from "../utils/getError";
import { useUserStore } from "../utils/zustand/Store";

export const Register = () => {

    const [state, setState] = useState({
        phone: "",
        email: "",
        password: "",
    });
    // const [loading, setLoading] = useState(false);
    const setToken = useUserStore((state) => state.setToken);

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;

        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await AuthServices.register(state)
        .then((response) => {
            setToken(response);
            swal("Success", response.message, "success");
            navigate('/login');
        })
        .catch((error) => {
            swal('Error!', getError(error), "error");
        })
    }
    return (
        <Layout>
            <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-sm space-y-10">
                    <div>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2 shadow-sm">
                            <div className="flex flex-col">
                                <label htmlFor="phone-number">Phone number</label>
                                <input id="phone-number" name="phone" type="text" required className="w-full rounded-t-md border border-indigo-500 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="+2547..." onChange={handleChange} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email-address">Email address</label>
                                <input id="email-address" name="email" type="email" required className="w-full rounded-t-md border border-indigo-500 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email address" onChange={handleChange} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password">Password</label>
                                <input id="password" name="password" type="password" required className="w-full rounded-b-md border border-indigo-500 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">Remember me</label>
                            </div>
                        </div>
                        <div className="text-end">
                            <p className="text-sm">Already have an account?<Link className="font-semibold text-indigo-600 hover:text-indigo-500" to="/login"> Click here to login</Link></p>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>

    )
}

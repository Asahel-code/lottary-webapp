import { useState } from "react"
import AuthServices from "../utils/services/AuthServices";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useUserStore } from "../utils/zustand/Store";
import { getError } from "../utils/getError";
import Layout from "../components/Layout";

export const Login = () => {

    const navigate = useNavigate();
    const [state, setState] = useState({
        phone: "",
        password: "",
    });
    // const [loading, setLoading] = useState(false);

    const setToken = useUserStore((state) => state.setToken);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await AuthServices.login(state).then((response) => {
            setToken(response);
            navigate("/verify-account");

            swal(response?.username, "you have logged in successfully", "success");
        })
            .catch((error) => {
                swal("error!", getError(error), "error")
            })
    }

    return (
        <Layout>
            <div className="flex min-h-full items-center justify-center py-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-sm space-y-10">
                    <div>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm flex flex-col gap-2">
                            <div className="flex flex-col">
                                <label htmlFor="email-address">Phone number</label>
                                <input id="email-address" name="phone" type="text" required className="w-full rounded-t-md border border-indigo-500 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email address" onChange={handleChange} />
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
                            <p className="text-sm">Would like to join us today?<Link className="font-semibold text-indigo-600 hover:text-indigo-500" to="/register"> Click here to register</Link></p>
                        </div>

                        <div className="">
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>

    )
}

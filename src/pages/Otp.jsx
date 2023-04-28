import { useState } from "react"
import AuthServices from "../utils/services/AuthServices";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useUserStore } from "../utils/zustand/Store";
import { getError } from "../utils/getError";
import Layout from "../components/Layout";

export const Otp = () => {

    const navigate = useNavigate();
    const [state, setState] = useState({
        code: ""
    });
    // const [loading, setLoading] = useState(false);

    const user = useUserStore((state) => state.user);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            code: state.code,
            phone: user.phone
        }

        await AuthServices.verifyAccount(data).then(() => {
            navigate("/");
            swal("Success", "Your account has been verified successfully", "success");
        })
            .catch((error) => {
                swal("error!", getError(error), "error")
            })
    }
    return (
        <Layout>
            <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-sm space-y-10">
                    <div>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Verify your account</h2>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm">
                            <div>
                                <label className="pb-6" htmlFor="otp">OTP code</label>
                                <input id="otp" name="code" type="text" required className="relative block w-full rounded-t-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="OTP" onChange={handleChange} />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>

    )
}

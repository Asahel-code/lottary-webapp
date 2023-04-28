import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../utils/zustand/Store";

const Navbar = () => {

    const user = useUserStore((state) => state.user);
    const removeToken = useUserStore((state) => state.removeToken);
    const navigate = useNavigate();

    const logout = () => {
        removeToken();
        navigate('/login')
    }
    return (
        <header className="bg-white shadow-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <Link to='/' className="-m-1.5 p-1.5 flex gap-3">
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    <span className="font-bold text-2xl text-indigo-500">LOTO</span>
                </Link>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                {!user?.phone ? <div className="hidden lg:flex lg:gap-x-12">
                    <Link className="text-sm font-semibold leading-6 text-gray-900" to="/login">Log in <span aria-hidden="true">&rarr;</span></Link>
                </div> :
                    <button className="px-2 py-2 bg-indigo-500 text-white rounded-lg hover:shadow-xl" onClick={logout}>Logout</button>}
            </nav>
            {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
            <div className="lg:hidden" role="dialog" aria-modal="true">
                {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                <div className="fixed inset-0 z-10"></div>
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </a>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                            </div>
                            {!user?.phone ? <div className="py-6">
                                <Link className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to="/login">Log in </Link>
                            </div> :
                                <button className="px-2 py-2 bg-indigo-500 text-white rounded-lg hover:shadow-xl" onClick={logout}>Logout</button>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
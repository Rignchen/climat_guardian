
import {Link} from "react-router-dom";

export default function SideBarElement() {
    const logout = () => {
       localStorage.clear()
        location.reload();
    }
    return (
        <aside id="default-sidebar"
               className="shadow-xl rounded-2xl top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 absolute flex flex-col"
               aria-label="Sidebar">
            <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto bg-white rounded-2xl dark:bg-slate-800">
                <div className="space-y-2 font-medium">
                    <Link
                        className="flex items-center p-2 text-gray-900 rounded-xl dark:text-white hover:bg-gray-100 dark:hover:bg-slate-950 group" to="/dashboard">
                        <svg
                            className="w-5 h-5 text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 21">
                            <path
                                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path
                                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                    </Link>
                    <Link
                        className="flex items-center p-2 text-gray-900 rounded-xl dark:text-white hover:bg-gray-100 dark:hover:bg-slate-950 group"
                        to="/plan">
                        <img src="floor-plan.svg" className="w-5" alt="floor plan icon"/>
                        <span className="flex-1 ms-3 whitespace-nowrap">Plan</span>
                    </Link>
                    <Link
                        className="flex items-center p-2 text-gray-900 rounded-xl dark:text-white hover:bg-gray-100 dark:hover:bg-slate-950 group" to="/plan">
                        <svg
                            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 18">
                            <path
                                d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                    </Link>
                </div>
                <div className="p-2">
                    <button onClick={logout} className="w-full py-2 rounded-xl text-dark dark:text-white hover:bg-gray-200 dark:hover:bg-slate-950">log out</button>
                </div>
            </div>
        </aside>
    );
}

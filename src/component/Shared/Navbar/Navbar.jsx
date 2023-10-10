import { Link } from "react-router-dom";
import imgMan from '../../../assets/image/man/man.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    const NavOption = <>
        <div className="flex flex-row justify-end  ">
            <Link className="mr-4 text-base hover:text-red-600 font-semibold ">Home</Link>
            <Link className="mr-4 text-base hover:text-red-600 font-semibold ">About</Link>
            <Link className="mr-4 text-base hover:text-red-600 font-semibold ">Blogs</Link>
            
            {
                user? <>
                <Link onClick={()=>logOut()} className="mr-4 text-base hover:text-red-600 font-semibold ">Log Out</Link>
            <img className=" rounded-full w-[34px] h-[34px]" src={user? user.photoURL : imgMan} alt="imgMan" />
                </> : <Link to='/login' className="mr-4 text-base hover:text-red-600 font-semibold ">Login</Link>
            }
        </div>
    </>

   
    return (
        <>
            <div className="navbar bg-base-100 justify-between ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl cursor-pointer">Resort Room Rent</a>
                </div>
                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal px-1 ">

                        {NavOption}

                    </ul>
                </div>

            </div>
            <hr />
        </>
    );
};

export default Navbar;
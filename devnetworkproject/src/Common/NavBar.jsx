import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { API_URL } from '../Constants/api'
import { addUser, removeUser } from '../utils/userSlice'

const NavBar = () => {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchUser = async () => {
        if (user) return null;
        try {
            const res = await axios.get(API_URL + 'profile', { withCredentials: true });
            dispatch(addUser(res.data))
        } catch (err) {
            console.log(err)
        }
    }

    const handleLogout = async () => {
        try {
            await axios.post(API_URL + "logout", {}, { withCredentials: true });
            dispatch(removeUser())
            navigate("/login")

        } catch (err) {
            console.log("The Error", err)
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])
    const handleClick = () => {
        navigate("/")
    }
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <Link className="btn btn-ghost text-xl" to={"/"}>Dev Network</Link>
                </div>
                <div className="flex gap-2">
                    {user && <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://cdn.pixabay.com/photo/2016/11/14/17/39/group-1824145_1280.png" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to="profile" className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li><Link to="connections">Go to Connections</Link></li>
                            <li><Link to="requests">Request Page</Link></li>
                            <li onClick={() => handleLogout()}><Link>Logout</Link></li>

                        </ul>
                    </div>}
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default NavBar
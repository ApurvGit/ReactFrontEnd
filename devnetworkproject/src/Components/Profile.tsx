import React from 'react'
import { useSelector } from 'react-redux'
import EditProfile from './EditProfile';
import UserCard from '../Common/UserCard';

const Profile = () => {
    const loggedInUser = useSelector(store => store.user);
    console.log(loggedInUser)
    return (
        <div>
            {loggedInUser && <div><EditProfile user={loggedInUser} /></div>}

        </div>
    )
}

export default Profile
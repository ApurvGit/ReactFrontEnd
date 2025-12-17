import React, { useState } from 'react'
import UserCard from '../Common/UserCard';
import axios from 'axios';
import { API_URL } from '../Constants/api';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const EditProfile = ({ user }) => {
    const { photoUrl } = user
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [emailId, setEmailId] = useState(user.emailId);
    const [city, setCity] = useState(user.city);
    const [photo, setPhotoUrl] = useState(user.photoUrl);
    const dispatch = useDispatch()
    console.log(user)
    const handleSave = async () => {
        try {
            const res = await axios.patch(API_URL + "profile/editProfile", { city, emailId }, { withCredentials: true });
            console.log(res)
            dispatch(addUser(res.data))
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className='flex justify-center'>
            <div className='flex justify-center my-10 mx-10'>
                <div className="card card-border bg-base-300 w-96">
                    <div className="card-body">
                        <h2 className="card-title">Login</h2>
                        <div>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">First Name</legend>
                                <input type="text"
                                    className="input"
                                    placeholder="Type here"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Email id</legend>
                                <input type="text"
                                    className="input"
                                    placeholder="Type here"
                                    value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">City</legend>
                                <input type="text"
                                    className="input"
                                    placeholder="Type here"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Last Name</legend>
                                <input type="text"
                                    className="input"
                                    placeholder="Type here"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Age</legend>
                                <input type="text"
                                    className="input"
                                    placeholder="Type here"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Photo</legend>
                                <input type="text"
                                    className="input"
                                    placeholder="Type here"
                                    value={photo}
                                    onChange={(e) => setPhotoUrl(e.target.value)} />
                            </fieldset>
                        </div>
                        <div className="card-actions flex justify-center my-4">
                            <button className="btn btn-primary" onClick={handleSave}> Save Profile</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-10'><UserCard user={{ firstName, lastName, age, photoUrl, emailId, city }} mode='connection' /></div>
        </div>
    )
}

export default EditProfile
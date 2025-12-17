import React, { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../Constants/api';

const Login = () => {
    const [emailId, setemailId] = useState('');
    const [password, setPassword] = useState('abc@#45123');
    const [isSignUpEnabled, setIsSignUpEnabled] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGender] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [emp_id, setEmpId] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (isSignUpEnabled) {
            const res = await axios.post(API_URL + "signUp", { firstName, lastName, emailId, gender, age, city, photoUrl, emp_id, password }, { withCredentials: true });
            dispatch(addUser(res.data.data));
            return navigate("/profile")
        }
        else {
            const res = await axios.post(API_URL + "login", {
                emailId,
                password
            }, { withCredentials: true })
            dispatch(addUser(res.data));
            navigate("/")
        }

    }
    const toggleBtnState = () => {
        setIsSignUpEnabled(!isSignUpEnabled)
    }
    return (
        <div className='flex justify-center my-10'>
            <div className="card card-border bg-base-300 w-96">
                <div className="card-body">
                    <h2 className="card-title">{isSignUpEnabled ? 'Sign Up' : 'Log in'}</h2>
                    {!isSignUpEnabled && <div>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email id</legend>
                            <input type="text"
                                className="input"
                                placeholder="Type here"
                                value={emailId}
                                onChange={(e) => setemailId(e.target.value)} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Password</legend>
                            <input type="password"
                                className="input"
                                placeholder="Type here"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </fieldset>
                    </div>}
                    {isSignUpEnabled && <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">First Name</legend>
                            <input type="text"
                                className="input"
                                placeholder="Type here"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} />
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
                            <legend className="fieldset-legend">Email id</legend>
                            <input type="text"
                                className="input"
                                placeholder="Type here"
                                value={emailId}
                                onChange={(e) => setemailId(e.target.value)} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Password</legend>
                            <input type="password"
                                className="input"
                                placeholder="Type here"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
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
                            <legend className="fieldset-legend">City</legend>
                            <input type="text"
                                className="input"
                                placeholder="Type here"
                                value={city}
                                onChange={(e) => setCity(e.target.value)} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Gender</legend>
                            <input type="text"
                                className="input"
                                placeholder="Type here"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Photo Url</legend>
                            <input type="text"
                                className="input"
                                placeholder="Type here"
                                value={photoUrl}
                                onChange={(e) => setPhotoUrl(e.target.value)} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Employee id</legend>
                            <input type="text"
                                className="input"
                                placeholder="Type here"
                                value={emp_id}
                                onChange={(e) => setEmpId(e.target.value)} />
                        </fieldset>
                    </div>}
                    <div className="card-actions flex flex-col justify-center my-4">
                        <button className="btn btn-primary" onClick={() => handleLogin()}>{isSignUpEnabled ? 'Sign Up' : 'Log in'}</button>
                        <p onClick={() => toggleBtnState()}>{isSignUpEnabled ? 'Existing User?log in' : 'Register for New user'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
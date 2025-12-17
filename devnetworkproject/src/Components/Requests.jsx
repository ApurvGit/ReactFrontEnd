import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../Constants/api'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests } from '../utils/requestsSlice'
import UserCard from '../Common/UserCard'
import { addConnection } from '../utils/connectionsSlice'

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector(store => store.requests)
    const [notification, setNotfication] = useState("")
    const [showNotification, setShowNotification] = useState(false)
    const requestSelector = useSelector(store => store.connections);
    const fetchRequests = async () => {
        try {
            const res = await axios.get(API_URL + 'user/requests/received', { withCredentials: true })
            console.log(res.data)
            dispatch(addRequests(res.data))

        } catch (e) {
            console.log("Error", e)
        }
    }
    useEffect(() => {
        fetchRequests()
    }, [])
    const disbaleNotificaiton = () => {
        setTimeout(() => {
            setShowNotification(false)
        }, 3000)
    }
    const onClickStatus = async (status, id) => {
        try {
            const res = await axios.post(
                API_URL + 'request/review/' + status + '/' + id, {},
                { withCredentials: true }
            );

            console.log(res)
            if (res.data.message === "Connection Sucess") {
                setNotfication("Request is sucessfully Accepted")
                setShowNotification(true)
                await fetchRequests()
                disbaleNotificaiton()
                const existingConnections = [...requestSelector]
                existingConnections.push(res.data.data)
                dispatch(addConnection(existingConnections))
            }
        } catch (err) {
            console.log(err)
            setNotfication("Request is  Rejected")
            setShowNotification(false)
        }
    }
    return (
        <div className=' flex flex-wrap justify-start h-3'>
            {requests?.map(connection => {
                console.log(connection)
                return (
                    <div className='my-10 mx-5'><UserCard user={connection?.fromUserId} onClickStatus={onClickStatus} acceptBtnLabel="Accpet" ignoreBtnLabel="Reject" /></div>
                )
            })}
            {showNotification && <div className="toast toast-top toast-center">
                <div class="alert alert-info">
                    <span>{notification}</span>
                </div>

            </div>}
        </div>
    )
}

export default Requests
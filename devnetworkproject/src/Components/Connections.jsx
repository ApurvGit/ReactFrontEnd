import axios from 'axios'
import React, { useEffect } from 'react'
import { API_URL } from '../Constants/api'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../utils/connectionsSlice'
import UserCard from '../Common/UserCard'
const Connections = () => {
    const dispatch = useDispatch();
    const connectionSelector = useSelector(store => store.connections)
    const getConnections = async () => {
        try {
            if (Object.keys(connectionSelector).length > 0) return
            const res = await axios.get(API_URL + '/user/connections', { withCredentials: true });
            console.log("RES", res.data)
            dispatch(addConnection(res.data?.connectionRequests))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getConnections()
    }, [])
    if (!connectionSelector) return
    if (Object.keys(connectionSelector).length === 0) return <h1>No Connection Found</h1>
    console.log("The Connection selector", connectionSelector)
    return (
        <div className="flex flex-wrap">
            {connectionSelector?.map(connection => {
                console.log(connection)
                return (
                    <div className='my-10 mx-5 border-2'><UserCard user={connection?.toUserId} mode={'connection'} /></div>
                )
            })}
        </div>
    )
}

export default Connections